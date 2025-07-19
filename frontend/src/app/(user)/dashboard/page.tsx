import DashboardLayout from "./DashboardLayout";
import CurrentApplications from "./components/CurrentApplications";
import JobSearchSection from "./components/JobSearchSection";
import StatsPanel from "./components/StatsPanel";
import LearningSection from "./components/LearningSection";
import CareerProfileSection from "./components/CareerProfileSection";

export default function DashboardPage() {
  const sections = {
    'Current Applications': <CurrentApplications />,
    'Job Search': <JobSearchSection />,
    'Your Job Search Stats': <StatsPanel />,
    'Learning & Interview Prep': <LearningSection />,
    'Career Goals & Profile': <CareerProfileSection />,
  };

  return <DashboardLayout sections={sections} />;
}

