import Link from "next/link";

export default function Header() {
  return (
    <header style={{padding: '1rem', borderBottom: '1px solid #eee', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>
        <Link href="/">AI Recruitment</Link>
      </div>
      <nav style={{display: 'flex', gap: '1rem'}}>
        <Link href="/jobs">Jobs</Link>
        <Link href="/features">Features</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Sign Up</Link>
      </nav>
    </header>
  );
}
