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

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Why Choose Us?</h2>
        <div className={styles.benefitGrid}>
          <div className={styles.benefitCard}>
            <img src="/benefit-ai.svg" alt="AI Powered" width={48} height={48} />
            <h3>AI Powered</h3>
            <p>Advanced AI technology for smarter job matching and CV analysis.</p>
          </div>
          <div className={styles.benefitCard}>
            <img src="/benefit-secure.svg" alt="Secure & Private" width={48} height={48} />
            <h3>Secure & Private</h3>
            <p>Your data is encrypted and privacy is our top priority.</p>
          </div>
          <div className={styles.benefitCard}>
            <img src="/benefit-easy.svg" alt="Easy to Use" width={48} height={48} />
            <h3>Easy to Use</h3>
            <p>Intuitive interface for both candidates and employers.</p>
          </div>
          <div className={styles.benefitCard}>
            <img src="/benefit-support.svg" alt="24/7 Support" width={48} height={48} />
            <h3>24/7 Support</h3>
            <p>Our team is always here to help you succeed.</p>
          </div>
        </div>
      </section>

      {/* Testimonials / Logos Section */}
      <section className={styles.testimonials}>
        <h2>Trusted by Candidates & Employers</h2>
        <div className={styles.logoRow}>
          <img src="/logo1.svg" alt="Company 1" width={80} height={32} />
          <img src="/logo2.svg" alt="Company 2" width={80} height={32} />
          <img src="/logo3.svg" alt="Company 3" width={80} height={32} />
          <img src="/logo4.svg" alt="Company 4" width={80} height={32} />
        </div>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>“This platform made my job search effortless. The AI suggestions were spot on!”</p>
            <span>- Priya S., Data Scientist</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>“We found top talent much faster than with traditional job boards.”</p>
            <span>- Alex W., Tech Recruiter</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>“The CV feedback helped me land more interviews. Highly recommended!”</p>
            <span>- Omar R., Software Engineer</span>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img src="/logo.svg" alt="AI Recruitment Logo" width={40} height={40} />
            <span>AI Recruitment Portal</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="/about">About</a>
            <a href="/features">Features</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms-of-service">Terms</a>
          </div>
          <div className={styles.footerSocial}>
            <a href="mailto:info@aiinitiative.co.uk" title="Email">
              <img src="/icon-mail.svg" alt="Email" width={28} height={28} />
            </a>
            <a href="https://www.linkedin.com/company/aiinitiative" target="_blank" rel="noopener" title="LinkedIn">
              <img src="/icon-linkedin.svg" alt="LinkedIn" width={28} height={28} />
            </a>
            <a href="https://twitter.com/aiinitiative" target="_blank" rel="noopener" title="Twitter">
              <img src="/icon-twitter.svg" alt="Twitter" width={28} height={28} />
            </a>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} AI Initiative. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

