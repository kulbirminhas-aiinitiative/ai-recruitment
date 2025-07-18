import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>AI-Powered Recruitment Portal</h1>
          <p>
            Find your dream job or top talent with cutting-edge AI. Upload your CV, get instant feedback, and connect with the best opportunities.
          </p>
          <a className={styles.cta} href="/register">Get Started</a>
        </div>
        <div className={styles.heroImage}>
          <Image src="/ai-recruitment-hero.svg" alt="AI Recruitment Illustration" width={380} height={320} priority />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className={styles.features}>
        <h2>Platform Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <Image src="/cv-analysis.svg" alt="CV Analysis" width={56} height={56} />
            <h3>AI CV Analysis</h3>
            <p>Upload your CV and receive instant, actionable feedback powered by AI.</p>
          </div>
          <div className={styles.featureCard}>
            <Image src="/job-search.svg" alt="Smart Job Search" width={56} height={56} />
            <h3>Smart Job Search</h3>
            <p>Discover jobs tailored to your skills and interests with advanced search filters.</p>
          </div>
          <div className={styles.featureCard}>
            <Image src="/application-tracking.svg" alt="Application Tracking" width={56} height={56} />
            <h3>Application Tracking</h3>
            <p>Track your job applications and get real-time updates on your progress.</p>
          </div>
          <div className={styles.featureCard}>
            <Image src="/employer-branding.svg" alt="Employer Branding" width={56} height={56} />
            <h3>Employer Branding</h3>
            <p>Employers can showcase their brand and attract top talent with custom pages.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.workflow}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <p>Register or log in to your account</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <p>Upload your CV and receive AI-powered feedback</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <p>Search and apply for jobs that match your profile</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>4</span>
            <p>Track your applications and connect with employers</p>
          </div>
        </div>
      </section>
    </div>
  );
}

