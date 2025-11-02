export default function Footer() {
  return (
    <footer id="contato" className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Elion Softwares</h3>
            <p className="mt-2 text-sm text-gray-600">Construímos produtos digitais de alto impacto com foco em qualidade, velocidade e segurança.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Fale conosco</h4>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              <li>Email: contato@elionsoftwares.com</li>
              <li>Telefone: (11) 99999-0000</li>
              <li>Horário: Seg a Sex, 9h às 18h</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Vamos iniciar seu projeto</h4>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
              <input type="email" required placeholder="Seu melhor e-mail" className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-700">Enviar</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Elion Softwares. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#sobre" className="hover:text-gray-700">Sobre</a>
            <a href="#servicos" className="hover:text-gray-700">Serviços</a>
            <a href="#inicio" className="hover:text-gray-700">Início</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
