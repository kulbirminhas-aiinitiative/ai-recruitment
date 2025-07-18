"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type LogEntry = {
  type: "error" | "warn" | "info";
  message: string;
  timestamp: string;
};

const LogContext = createContext<{
  logs: LogEntry[];
  addLog: (entry: LogEntry) => void;
}>({ logs: [], addLog: () => {} });

export function useLogs() {
  return useContext(LogContext);
}

export function LogProvider({ children }: { children: ReactNode }) {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (entry: LogEntry) => setLogs(logs => [...logs, entry]);

  useEffect(() => {
    const origError = console.error;
    const origWarn = console.warn;
    const origInfo = console.info;
    
    console.error = (...args) => {
      addLog({ type: "error", message: args.join(" "), timestamp: new Date().toLocaleString() });
      origError(...args);
    };
    console.warn = (...args) => {
      addLog({ type: "warn", message: args.join(" "), timestamp: new Date().toLocaleString() });
      origWarn(...args);
    };
    console.info = (...args) => {
      addLog({ type: "info", message: args.join(" "), timestamp: new Date().toLocaleString() });
      origInfo(...args);
    };
    
    const onError = (event: ErrorEvent) => {
      addLog({ type: "error", message: event.message, timestamp: new Date().toLocaleString() });
    };
    window.addEventListener("error", onError);
    return () => {
      console.error = origError;
      console.warn = origWarn;
      console.info = origInfo;
      window.removeEventListener("error", onError);
    };
  }, []);

  return <LogContext.Provider value={{ logs, addLog }}>{children}</LogContext.Provider>;
}
