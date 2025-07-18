import Image from "next/image";
export default function AboutPage() {
  return (
    <main style={{maxWidth: 800, margin: '2rem auto', padding: '2rem'}}>
      <div style={{textAlign: 'center', marginBottom: 32}}>
        <Image src="/logo.png" alt="AI Recruit Logo" width={160} height={54} priority />
      </div>
      <h1>About AI Recruitment Portal</h1>
      <p style={{fontSize: '1.1em', margin: '1.5em 0'}}>
        <b>AI Recruitment Portal</b> is dedicated to transforming the way candidates and employers connect, leveraging the power of artificial intelligence to streamline job search, application, and talent discovery.
      </p>
      <h2>Our Mission</h2>
      <p>
        To empower job seekers and employers with intelligent tools that make recruitment efficient, fair, and accessible for everyone.
      </p>
      <h2>Why Choose Us?</h2>
      <ul style={{marginLeft: 24, marginBottom: 24}}>
        <li>AI-powered CV analysis and job recommendations</li>
        <li>Smart matching for candidates and employers</li>
        <li>Modern, intuitive, and secure platform</li>
        <li>Dedicated support and continuous innovation</li>
      </ul>
      <h2>Our Vision</h2>
      <p>
        We envision a world where technology bridges the gap between talent and opportunity, helping people achieve their career goals and enabling organizations to thrive with the right talent.
      </p>
    </main>
  );
}
