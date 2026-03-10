import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}

export default App;
