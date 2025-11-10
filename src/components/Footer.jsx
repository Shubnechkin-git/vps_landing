function Footer() {
  return (
    <footer className="w-full z-50 transition-all duration-300 bg-gray-900/98 backdrop-blur-lg border-t border-gray-700 shadow-xl p-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6 flex-wrap">
          {/* Логотип и название */}
          <div className="flex items-center gap-2">
            <p className="text-gray-400 text-sm md:text-base">
              Сделано командой <span className="text-orange-500 font-semibold">Shubnechkin</span>
            </p>
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-orange-500">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          {/* Ссылки на бота и поддержку */}
          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/shubnechkin_vpn_bot?start=landing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-orange-500 text-sm md:text-base transition-colors"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.174 1.858-.928 6.601-1.31 8.75-.164.9-.487 1.201-.8 1.23-.7.064-1.23-.461-1.908-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.118.095.151.223.167.312.016.09.036.295.02.455z"/>
              </svg>
              <span>Бот</span>
            </a>
            <a 
              href="https://t.me/shubnechkin_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-orange-500 text-sm md:text-base transition-colors"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.174 1.858-.928 6.601-1.31 8.75-.164.9-.487 1.201-.8 1.23-.7.064-1.23-.461-1.908-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.118.095.151.223.167.312.016.09.036.295.02.455z"/>
              </svg>
              <span>Поддержка</span>
            </a>
            <a 
              href="https://telegra.ph/Polzovatelskoe-soglashenie-Shubnechkin-VPS-11-05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm md:text-base transition-colors"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Условия сервиса</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

