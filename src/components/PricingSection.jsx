function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden" aria-label="Тарифы и цены">
      {/* Парящие элементы */}
      <div className="absolute top-32 left-12 w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg rotate-12 animate-bounce opacity-60" style={{ animationDuration: '3.8s' }}>
        <svg className="w-full h-full text-orange-500/40 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-16 w-8 h-8 md:w-10 md:h-10 bg-orange-500/10 rounded-lg -rotate-12 animate-bounce opacity-60" style={{ animationDuration: '4.2s', animationDelay: '0.8s' }}>
        <svg className="w-full h-full text-orange-500/40 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 scroll-animate gradient-text text-shadow">
          Тарифы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
          {/* 1 месяц */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 flex flex-col card-hover group shadow-lg hover:shadow-glow-orange">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">1 месяц</h3>
            </div>
            <div className="mb-6 flex-grow">
              <div className="text-4xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                179 ₽
              </div>
            </div>
            <a 
              href="https://t.me/shubnechkin_vpn_bot?start=landing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="Купить тариф на 1 месяц за 179 рублей"
            >
              Купить
            </a>
          </div>

          {/* 3 месяца - оптимальный */}
          <div className="bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900 rounded-xl p-6 border-2 border-orange-500 flex flex-col relative shadow-glow-orange-lg card-hover group hover-glow">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                🔥 Оптимальный
              </span>
            </div>
            <div className="mb-4 mt-2">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">3 месяца</h3>
            </div>
            <div className="mb-6 flex-grow">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                449 ₽
              </div>
              <div className="text-lg text-orange-500 font-semibold mb-4">
                по 150 ₽/мес
              </div>
            </div>
            <a 
              href="https://t.me/shubnechkin_vpn_bot?start=landing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg shadow-orange-500/30"
              aria-label="Купить тариф на 3 месяца за 449 рублей"
            >
              Купить
            </a>
          </div>

          {/* 6 месяцев - оптимальный */}
          <div className="bg-gradient-to-br from-gray-900 via-orange-800/30 to-gray-900 rounded-xl p-6 border-2 border-orange-500 flex flex-col relative shadow-glow-orange-lg card-hover group hover-glow">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                🔥 Оптимальный
              </span>
            </div>
            <div className="mb-4 mt-2">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">6 месяцев</h3>
            </div>
            <div className="mb-6 flex-grow">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                799 ₽
              </div>
              <div className="text-lg text-orange-500 font-semibold mb-4">
                по 133 ₽/мес
              </div>
            </div>
            <a 
              href="https://t.me/shubnechkin_vpn_bot?start=landing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg shadow-orange-500/30"
              aria-label="Купить тариф на 6 месяцев за 799 рублей"
            >
              Купить
            </a>
          </div>

          {/* 12 месяцев */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 flex flex-col card-hover group shadow-lg hover:shadow-glow-orange">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">12 месяцев</h3>
            </div>
            <div className="mb-6 flex-grow">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                1399 ₽
              </div>
              <div className="text-lg text-orange-500 font-semibold mb-4">
                по 117 ₽/мес
              </div>
            </div>
            <a 
              href="https://t.me/shubnechkin_vpn_bot?start=landing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="Купить тариф на 12 месяцев за 1399 рублей"
            >
              Купить
            </a>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-orange-500 font-semibold">
            🔥 Оптимальный выбор — 3 или 6 месяцев: выгодно и без лишних продлений!
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

