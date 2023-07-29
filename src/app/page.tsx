import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="mx-6 lg:mx-20 lg:grid  lg:grid-cols-2">
      <Header />
      <div>
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
