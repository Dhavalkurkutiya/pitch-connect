import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sens min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </main>
  );
}
