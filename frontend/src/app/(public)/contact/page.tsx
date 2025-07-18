import Image from "next/image";
export default function ContactPage() {
  return (
    <main style={{maxWidth: 700, margin: '2rem auto', padding: '2rem'}}>
      <div style={{textAlign: 'center', marginBottom: 32}}>
        <Image src="/logo.png" alt="AI Recruit Logo" width={160} height={54} priority />
      </div>
      <h1>Contact Us</h1>
      <p>Have questions or need support? Reach out and our team will get back to you promptly.</p>
      <form style={{margin: '2em 0', display: 'flex', flexDirection: 'column', gap: 16}}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
        <button type="submit" style={{width: 180}}>Send Message</button>
      </form>
      <div style={{marginTop: 24, fontSize: '1.05em'}}>
        <b>Email:</b> <a href="mailto:info@aiinitiative.co.uk">info@aiinitiative.co.uk</a><br />
        <b>LinkedIn:</b> <a href="https://www.linkedin.com/company/aiinitiative" target="_blank" rel="noopener">AI Initiative</a>
      </div>
    </main>
  );
}
