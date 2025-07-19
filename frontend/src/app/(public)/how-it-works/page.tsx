import React from 'react';
import styles from './HowItWorks.module.css';
import { LogIn, UploadCloud, Search, Send, Users, Building, FilePlus, BrainCircuit, MessageSquare, Award } from 'lucide-react';

const candidateSteps = [
  { icon: <LogIn />, text: 'Register or log in to your account.' },
  { icon: <UploadCloud />, text: 'Upload your CV and get instant, AI-powered feedback.' },
  { icon: <Search />, text: 'Effortlessly find jobs that perfectly match your skills and interests.' },
  { icon: <Send />, text: 'Apply directly and track your application every step of the way.' },
  { icon: <Users />, text: 'Connect with employers and schedule interviews.' },
];

const employerSteps = [
  { icon: <Building />, text: 'Create your profile and post job openings.' },
  { icon: <FilePlus />, text: 'Receive smart-matched candidates for your roles.' },
  { icon: <BrainCircuit />, text: 'Review applications and access AI-powered candidate insights.' },
  { icon: <MessageSquare />, text: 'Communicate seamlessly with candidates and manage interviews.' },
  { icon: <Award />, text: 'Hire top talent and build your employer brand.' },
];

const HowItWorksPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>How It Works</h1>
        <p>A streamlined process for both candidates and employers.</p>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.column}>
          <h2>For Candidates</h2>
          <ul className={styles.stepList}>
            <li className={styles.stepItem}>
              <p><b>Effortless Journey:</b> Simply register and tell our AI agents your preferences.</p>
            </li>
            <li className={styles.stepItem}>
              <p><b>Automated Matching & Applications:</b> Our AI agents will scour the market, identify perfectly matched opportunities, and handle all applications and follow-ups for you.</p>
            </li>
            <li className={styles.stepItem}>
              <p><b>Focus on Interviews:</b> Your only direct involvement is for the job interview.</p>
            </li>
            <li className={styles.stepItem}>
              <p><b>Continuous Updates:</b> Our AI agents manage the rest, keeping you informed until you land your dream job.</p>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h2>For Employers</h2>
          <ul className={styles.stepList}>
            <li className={styles.stepItem}>
              <p><b>Streamlined Talent Acquisition:</b> Simply define your job specifications.</p>
            </li>
            <li className={styles.stepItem}>
              <p><b>Intelligent Sourcing & Vetting:</b> Our AI agents will source, vet, and engage with candidates, presenting a curated list of top prospects.</p>
            </li>
            <li className={styles.stepItem}>
              <p><b>Interview Streamlining:</b> AI can assist with scheduling and initial screening for interviews.</p>
            </li>
            <li className={styles.stepItem}>
              <p><b>Strategic Hiring:</b> Your role focuses on making final hiring decisions based on the best-fit matches delivered by the platform, building your ideal team with unparalleled efficiency.</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HowItWorksPage;

