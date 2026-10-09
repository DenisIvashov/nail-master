function Header() {
    return (
      <>
        <header className="header-container">
          <a href="#hero" className="logo-link">
            <span className="logo-text">Маникюр • Омск</span>
          </a>
          <nav>
            <a href="#services">Услуги</a>
            <a href="#prices">Цены</a>
            <a href="#reviews">Отзывы</a>
            <a href="#footer">Контакты</a>
          </nav>
          <a
            href="https://vk.ru/id710373788"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book"
          >
            Записаться
          </a>
          <span className="phone">+7999999999</span>
        </header>
      </>
    );
}

export default Header;