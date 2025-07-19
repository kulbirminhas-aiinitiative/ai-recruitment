import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header style={{padding: '1rem', borderBottom: '1px solid #eee', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
  <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2563eb', textDecoration: 'none' }}>AI Recruitment</Link>
  <Logo width={36} height={36} />
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
