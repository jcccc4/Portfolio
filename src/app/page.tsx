import Header from "./components/Header";
import SocialLinks from "@/app/components/SocialLinks";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="mx-6">
      <Header />
      <SocialLinks />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
