function TickerSection() {
  const text = "А у IP VANISH 924 ₽ в месяц + А у ExpressProxy 1012 ₽ в месяц + А у Surfshark 1078 ₽ в месяц + А у VanyaProxy 500 ₽ в месяц + А у atlasProxy 915 ₽ в месяц + А у ZenMate 1 004 ₽ в месяц + А у vyprproxy 1 188 ₽ в месяц + А у CyberGhost 1 098 ₽ в месяц + ";

  return (
    <section className="py-6 bg-gray-800 border-y border-gray-700 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex">
            {/* Дублируем текст для бесшовной анимации */}
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-orange-500 font-semibold text-lg md:text-xl mr-8">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TickerSection

