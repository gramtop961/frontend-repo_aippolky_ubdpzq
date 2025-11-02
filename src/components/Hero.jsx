import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">
              <Star size={14} />
              Software sob medida para o seu negócio
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Elevamos suas ideias com
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"> tecnologia</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              A Elion Softwares desenvolve soluções digitais modernas, seguras e escaláveis — de produtos web a aplicativos — para acelerar a inovação na sua empresa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#contato" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-700">
                <Rocket className="mr-2" size={18} /> Solicitar proposta
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                Ver serviços
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500"/>Qualidade comprovada</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-indigo-500"/>Entrega ágil</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-violet-500"/>Time sênior</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-1 shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white grid grid-cols-2 gap-2 p-3">
                <div className="rounded-xl bg-indigo-50" />
                <div className="rounded-xl bg-violet-50" />
                <div className="rounded-xl bg-fuchsia-50" />
                <div className="rounded-xl bg-indigo-50" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md border border-gray-100 rounded-xl p-4 shadow-sm">
              <p className="text-sm font-semibold text-gray-800">Projetos entregues</p>
              <p className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">+120</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
