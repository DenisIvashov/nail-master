const footerData = {
  phone: "+7999999999",
  email: "mail@example.com",
  address: "Омск, ул. Примерная, 1",
  socials: [
    {
      name: "ВКонтакте",
      url: "https://vk.ru/id710373788",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.816.604.422 1.062.33 1.062.33l2.132-.03s1.115-.07.586-.955c-.043-.072-.308-.657-1.587-1.858-1.337-1.256-1.157-1.053.452-3.228.98-1.322 1.372-2.13 1.25-2.476-.117-.329-.84-.242-.84-.242l-2.4.015s-.178-.024-.31.055c-.129.077-.212.256-.212.256s-.38 1.018-.886 1.884c-1.069 1.86-1.497 1.959-1.671 1.843-.406-.266-.304-1.068-.304-1.638 0-1.78.266-2.521-.52-2.713-.26-.063-.45-.105-1.113-.112-.85-.008-1.57.003-1.977.206-.27.135-.48.437-.352.455.158.022.516.098.706.362.245.34.236 1.105.236 1.105s.14 2.094-.328 2.353c-.32.177-.76-.184-1.71-1.836-.485-.852-.852-1.793-.852-1.793s-.071-.177-.198-.272c-.154-.115-.37-.152-.37-.152l-2.28.015s-.342.01-.468.16c-.112.134-.009.411-.009.411s1.786 4.237 3.808 6.372c1.854 1.956 3.961 1.828 3.961 1.828h.953z" />
        </svg>
      ),
    },
  ],
  copyright: "© 2024 Маникюр в Омске. Все права защищены.",
};

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col-info">
            <h4 className="footer-title">Маникюр в Омске</h4>
            <p className="footer-text">
              Аккуратный маникюр и стильные дизайны для тех, кто ценит качество и
              комфорт.
            </p>
          </div>

          <div className="footer-col footer-col-contacts">
            <h4 className="footer-title">Контакты</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="footer-icon">📞</span>
                <a href={`tel:\${footerData.phone}`} className="footer-link">
                  {footerData.phone}
                </a>
              </li>
              <li className="footer-item">
                <span className="footer-icon">✉️</span>
                <a href={`mailto:\${footerData.email}`} className="footer-link">
                  {footerData.email}
                </a>
              </li>
              <li className="footer-item">
                <span className="footer-icon">📍</span>
                <span className="footer-text">{footerData.address}</span>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-col-socials">
            <h4 className="footer-title">Мы в соцсетях</h4>
            <ul className="footer-list social-list">
              {footerData.socials.map((social) => (
                <li key={social.name} className="social-item">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name visually-hidden">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
