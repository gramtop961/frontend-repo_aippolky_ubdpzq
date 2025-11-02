import { Code, Shield, Smartphone, Server } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    desc: 'Aplicações modernas, responsivas e escaláveis usando as melhores stacks do mercado.'
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    desc: 'Aplicativos nativos e híbridos com experiência fluida para iOS e Android.'
  },
  {
    icon: Server,
    title: 'APIs & Integrações',
    desc: 'Arquiteturas seguras, performáticas e prontas para crescer com o seu negócio.'
  },
  {
    icon: Shield,
    title: 'Segurança & Compliance',
    desc: 'Boas práticas, auditorias e conformidade para manter seus dados protegidos.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">O que fazemos</h2>
          <p className="mt-4 text-gray-600">De estratégia a execução, entregamos soluções ponta a ponta que aceleram resultados.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-700 p-3">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity">Saiba mais →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
