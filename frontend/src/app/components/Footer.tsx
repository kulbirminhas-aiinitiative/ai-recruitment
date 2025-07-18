export default function Footer() {
  return (
    <footer style={{padding: '1rem', borderTop: '1px solid #eee', background: '#fafafa', textAlign: 'center', marginTop: '2rem'}}>
      <nav style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div style={{fontSize: '0.9rem', color: '#888', marginTop: '0.5rem'}}>
        &copy; {new Date().getFullYear()} AI Recruitment. All rights reserved.
      </div>
    </footer>
  );
}
