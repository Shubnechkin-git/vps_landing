
function BannerCard() {
  return (
    <section id="banner" className="bg-gray-900 py-8 relative overflow-hidden" aria-label="Главный баннер">
      <div className="container mx-auto px-4 pt-32 md:pt-24 pb-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-glow-orange-xl bg-gray-800 border border-orange-500/20">
        <div className="flex flex-col lg:flex-row">
          {/* Иконка сверху на мобильных и средних экранах, справа на больших */}
          <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:min-h-[500px] flex items-center justify-center p-8 md:p-12 relative order-1 lg:order-2">
            {/* Анимированный фон */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 md:w-[500px] md:h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
            
            {/* Главная иконка сервера */}
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                {/* Декоративные линии вместо кругов */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
                  <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
                  <div className="absolute w-full h-full border border-orange-500/10 rounded-full animate-pulse-scale"></div>
                </div>
                
                {/* Центральная иконка */}
                <div className="absolute inset-4 md:inset-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border-2 border-orange-500/40 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300">
                  <svg 
                    className="w-32 h-32 md:w-40 md:h-40 text-orange-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" 
                    />
                  </svg>
                  
                  {/* Светящиеся точки */}
                  <div className="absolute top-3 right-3 w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 left-3 w-3 h-3 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Парящие элементы */}
                <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-xl rotate-12 animate-bounce shadow-lg shadow-orange-500/30" style={{ animationDuration: '3s' }}>
                  <svg className="w-full h-full text-orange-500 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-xl -rotate-12 animate-bounce shadow-lg shadow-orange-500/30" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                  <svg className="w-full h-full text-orange-500 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Текст снизу на мобильных и средних экранах, слева на больших */}
          <div className="flex-1 flex items-center p-8 md:p-12 animate-fade-in-up order-2 lg:order-1">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-5 animate-fade-in text-shadow-lg">
                Ваш личный VPS сервер
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
                Без сложной настройки
              </p>
              <p className="text-lg text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Подключайтесь к своему серверу прямо через наше приложение. Работает на телефонах, компьютерах и телевизорах.
              </p>
              
              {/* Особенности */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300 group">
                  <div className="flex-shrink-0 w-8 h-8 text-orange-500 icon-bounce icon-glow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">Безопасное и стабильное соединение</div>
                </div>
                <div className="flex items-center gap-3 text-gray-300 group">
                  <div className="flex-shrink-0 w-8 h-8 text-orange-500 icon-bounce">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">Максимальная скорость и безлимит</div>
                </div>
                <div className="flex items-center gap-3 text-gray-300 group">
                  <div className="flex-shrink-0 w-8 h-8 text-orange-500 icon-bounce">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">До 5 устройств одновременно</div>
                </div>
                <div className="flex items-center gap-3 text-gray-300 group">
                  <div className="flex-shrink-0 w-8 h-8 text-orange-500 icon-bounce">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">Работают российские и зарубежные сервисы</div>
                </div>
                <div className="flex items-center gap-3 text-gray-300 group sm:col-span-2">
                  <div className="flex-shrink-0 w-8 h-8 text-orange-500 icon-bounce">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">YouTube без рекламы и ограничений</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                Для iOS / Android / Win / macOS 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://t.me/shubnechkin_vpn_bot?start=landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg shadow-orange-500/30"
                  aria-label="Попробовать бесплатно через Telegram бота"
                >
                  Попробовать бесплатно
                </a>
                <a 
                  href="https://t.me/shubnechkin_vpn_bot?start=landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 relative overflow-hidden group"
                  aria-label="Купить тариф от 179 рублей в месяц"
                >
                  Купить от 179 ₽ в месяц
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default BannerCard

