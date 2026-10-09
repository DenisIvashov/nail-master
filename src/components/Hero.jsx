function Hero() {

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Маникюр в Омске — аккуратно и со вкусом</h1>
        <p className="hero-subtitle">
          Профессиональный маникюр у мастера с опытом. Использую материалы
          премиум-класса. Записывайтесь — покажу портфолио и подберу дизайн под
          ваш стиль.
        </p>

        <div className="hero-actions">
          <a
            href="https://vk.ru/id710373788"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book"
          >
            Записаться
          </a>
          <a href="#prices" className="btn-outline">
            Посмотреть цены
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
