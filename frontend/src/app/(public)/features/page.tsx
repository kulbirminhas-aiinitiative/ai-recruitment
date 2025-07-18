import Image from "next/image";
export default function FeaturesPage() {
  return (
    <main style={{maxWidth: 900, margin: '2rem auto', padding: '2rem'}}>
      <div style={{textAlign: 'center', marginBottom: 32}}>
        <Image src="/logo.png" alt="AI Recruit Logo" width={160} height={54} priority />
      </div>
      <h1>Platform Features</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginTop: 32}}>
        <div>
          <h2>AI CV Analysis</h2>
          <p>Upload your CV and receive instant, actionable feedback powered by advanced AI algorithms.</p>
        </div>
        <div>
          <h2>Smart Job Search</h2>
          <p>Find jobs tailored to your skills, experience, and preferences with intelligent search and filters.</p>
        </div>
        <div>
          <h2>Application Tracking</h2>
          <p>Track your applications and get notified about updates, interviews, and offers.</p>
        </div>
        <div>
          <h2>Employer Branding</h2>
          <p>Employers can showcase their brand and attract top talent with custom profiles and insights.</p>
        </div>
        <div>
          <h2>Analytics & Insights</h2>
          <p>Gain valuable insights into your job search or recruitment campaigns with built-in analytics.</p>
        </div>
        <div>
          <h2>Secure & Private</h2>
          <p>Your data is encrypted and protected. Privacy and security are our top priorities.</p>
        </div>
      </div>
    </main>
  );
}
