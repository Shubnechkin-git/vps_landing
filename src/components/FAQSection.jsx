function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden" aria-label="Часто задаваемые вопросы">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 scroll-animate gradient-text text-shadow">
          Частые вопросы
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto items-start"
          style={{ gridAutoRows: "min-content" }}
        >
          <details className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover shadow-lg hover:shadow-glow-orange">
            <summary className="text-white font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              <span>Это полноценный сервер?</span>
              <svg
                className="w-5 h-5 text-orange-500 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="mt-4 text-gray-300">
              Да. Вы получаете личный виртуальный сервер, готовый к работе сразу
              после оплаты. Управлять железом не требуется — всё готово к
              использованию.
            </div>
          </details>

          <details className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover shadow-lg hover:shadow-glow-orange">
            <summary className="text-white font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              <span>Можно ли менять локацию?</span>
              <svg
                className="w-5 h-5 text-orange-500 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="mt-4 text-gray-300">
              Да. Внутри кабинета доступны профили для разных стран.
              Переключение занимает считанные секунды.
            </div>
          </details>

          <details className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover shadow-lg hover:shadow-glow-orange">
            <summary className="text-white font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              <span>Какие устройства поддерживаются?</span>
              <svg
                className="w-5 h-5 text-orange-500 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="mt-4 text-gray-300">
              Мобильные и десктопные операционные системы. Дадим инструкции под
              ваши устройства.
            </div>
          </details>

          <details className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover shadow-lg hover:shadow-glow-orange">
            <summary className="text-white font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              <span>Работает ли с мобильной сети?</span>
              <svg
                className="w-5 h-5 text-orange-500 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="mt-4 text-gray-300">
              Да. Все наши локации будут работать как с мобильного, так и с
              домашнего интернета.
            </div>
          </details>

          <details className="bg-gray-800 rounded-xl p-6 border border-gray-700 md:col-span-2">
            <summary className="text-white font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
              <span>Как оплатить?</span>
              <svg
                className="w-5 h-5 text-orange-500 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="mt-4 text-gray-300">
              Мы принимаем российские и иностранные банковские карты.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
