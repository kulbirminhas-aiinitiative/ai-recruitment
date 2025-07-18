import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <Footer />
    </>
  );
}
