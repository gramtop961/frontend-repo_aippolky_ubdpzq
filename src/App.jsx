import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Sobre a Elion</h2>
            <p className="mt-4 text-gray-600">
              Somos um estúdio de engenharia de software focado em transformar ideias em produtos digitais reais. Atuamos desde a descoberta e design até a construção e evolução contínua.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border border-gray-200 bg-white p-3">+5 anos de mercado</li>
              <li className="rounded-lg border border-gray-200 bg-white p-3">Time especialista</li>
              <li className="rounded-lg border border-gray-200 bg-white p-3">Metodologia ágil</li>
              <li className="rounded-lg border border-gray-200 bg-white p-3">Qualidade garantida</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}
