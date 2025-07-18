export default function HowItWorksPage() {
  return (
    <main style={{maxWidth: 820, margin: '2rem auto', padding: '2rem'}}>
      <h1>How It Works</h1>
      <h2>For Candidates</h2>
      <ol style={{marginLeft: 24, marginBottom: 32}}>
        <li>Register or log in to your account.</li>
        <li>Upload your CV and receive AI-powered feedback.</li>
        <li>Search for jobs that match your skills and interests.</li>
        <li>Apply directly and track your application progress.</li>
        <li>Connect with employers and schedule interviews.</li>
      </ol>
      <h2>For Employers</h2>
      <ol style={{marginLeft: 24}}>
        <li>Create your employer profile and post job openings.</li>
        <li>Receive smart-matched candidates for your roles.</li>
        <li>Review applications and access AI-powered candidate insights.</li>
        <li>Communicate with candidates and manage interviews.</li>
        <li>Hire top talent and build your employer brand.</li>
      </ol>
    </main>
  );
}
