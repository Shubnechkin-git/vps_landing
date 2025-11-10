function ContactSection() {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden" aria-label="Контакты и поддержка">
      {/* Парящие элементы */}
      <div className="absolute top-20 left-10 w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg rotate-12 animate-bounce opacity-60" style={{ animationDuration: '3.6s' }}>
        <svg className="w-full h-full text-orange-500/40 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-12 w-8 h-8 md:w-10 md:h-10 bg-orange-500/10 rounded-lg -rotate-12 animate-bounce opacity-60" style={{ animationDuration: '4s', animationDelay: '1.2s' }}>
        <svg className="w-full h-full text-orange-500/40 p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 scroll-animate gradient-text text-shadow">
          Наши контакты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Telegram Bot */}
          <a 
            href="https://t.me/shubnechkin_vpn_bot?start=landing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:border-orange-500 transition-all duration-300 cursor-pointer card-hover group shadow-lg hover:shadow-glow-orange"
          >
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-orange-500 icon-bounce">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.174 1.858-.928 6.601-1.31 8.75-.164.9-.487 1.201-.8 1.23-.7.064-1.23-.461-1.908-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.118.095.151.223.167.312.016.09.036.295.02.455z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Telegram Bot</h3>
            <p className="text-gray-400">Телеграмм Бот</p>
          </a>

          {/* Support */}
          <a 
            href="https://t.me/shubnechkin_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:border-orange-500 transition-all duration-300 cursor-pointer card-hover group shadow-lg hover:shadow-glow-orange"
          >
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-orange-500 icon-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Support</h3>
            <p className="text-gray-400">Поддержка</p>
          </a>
        </div>

        {/* Текст поддержки */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-4">
            Остались вопросы или сомнения?
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Напишите нам в телеграмм{' '}
            <a 
              href="https://t.me/shubnechkin_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              @shubnechkin_dev
            </a>
          </p>
          <p className="text-lg text-orange-500 font-semibold">
            Мы с радостью ответим!
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

