function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden" aria-label="Возможности сервиса">
      {/* Парящие элементы */}
      <div className="absolute top-20 right-10 w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg rotate-12 animate-bounce opacity-60" style={{ animationDuration: '4s' }}>
        <svg className="w-full h-full text-orange-500/40 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-8 w-8 h-8 md:w-10 md:h-10 bg-orange-500/10 rounded-lg -rotate-12 animate-bounce opacity-60" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
        <svg className="w-full h-full text-orange-500/40 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 scroll-animate gradient-text text-shadow">
          Что вы получаете
        </h2>

        {/* Основные возможности */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Личный сервер */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover group shadow-lg hover:shadow-glow-orange">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300 shadow-lg shadow-orange-500/20">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-orange-500 icon-bounce icon-glow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Личный сервер
              </h3>
            </div>
            <p className="text-gray-300">
              Ваш личный сервер в разных странах с возможностью менять локацию в
              любой момент.
            </p>
          </div>

          {/* Для всех устройств */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover group shadow-lg hover:shadow-glow-orange">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300 shadow-lg shadow-orange-500/20">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-orange-500 icon-bounce icon-glow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Для всех устройств
              </h3>
            </div>
            <p className="text-gray-300">
              Вы сможете подключаться к серверу со всех ваших устройств
              одновременно, а также поделиться им с семьей и друзьями.
            </p>
          </div>

          {/* Совместимость */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover group shadow-lg hover:shadow-glow-orange">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300 shadow-lg shadow-orange-500/20">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-orange-500 icon-bounce icon-glow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Совместимость
              </h3>
            </div>
            <p className="text-gray-300">
              Подключайтесь на iOS, Android, Windows, macOS. Без сложных
              настроек.
            </p>
          </div>
        </div>

        {/* Метрики */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center card-hover hover-glow group shadow-lg hover:shadow-glow-orange">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300 icon-glow">
              &lt; 100 мс
            </div>
            <p className="text-gray-300 text-sm">
              обычная задержка до ближайших локаций
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center card-hover hover-glow group shadow-lg hover:shadow-glow-orange">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300 icon-glow">
              1 Гбит/с
            </div>
            <p className="text-gray-300 text-sm">порт на большинстве локаций</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center card-hover hover-glow group shadow-lg hover:shadow-glow-orange">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300 icon-glow">
              99.9%
            </div>
            <p className="text-gray-300 text-sm">доступность узлов</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center card-hover hover-glow group shadow-lg hover:shadow-glow-orange">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300 icon-glow">
              24/7
            </div>
            <p className="text-gray-300 text-sm">приоритетная поддержка</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
