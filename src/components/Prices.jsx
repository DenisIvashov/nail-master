function Prices() {
  const priceList = [
    {
      category: "Базовые услуги",
      items: [
        { title: "Маникюр без покрытия", price: 600 },
        { title: "Маникюр + покрытие гель-лак", price: 1200 }, // цену можно подставить свою
      ],
    },
    {
      category: "Наращивание и укрепление",
      items: [
        { title: "Укрепление (гель, акригель)", price: 2000 },
        { title: "Наращивание на нижние формы", price: 2200 },
        { title: "Наращивание на верхние формы", price: 2500 },
        { title: "Наращивание на гелевые типсы", price: 2500 },
      ],
    },
    {
      category: "Дизайн",
      items: [
        { title: "Роспись акварель", price: null }, // без цены — значит «по запросу»
        { title: "Стемпинг, слайдеры, втирка", price: "+100" },
      ],
    },
    {
      category: "Доп. услуги",
      items: [
        { title: "Ремонт 1 ногтя", price: 100 },
        { title: "Исправление клюющих ноготков", price: 300 },
        { title: "Чужое снятие", price: 200 },
        { title: "Смена формы", price: 100 },
        { title: "Мужской гигиенический маникюр", price: 600 },
      ],
    },
    {
      category: "Педикюр",
      items: [{ title: "Педикюр (пальчики)", price: 1500 }],
    },
  ];

  return (
    <section id="prices" className="prices">
      <div className="container">
        <h2 className="section-title">Цены на услуги</h2>
        <div className="categories-grid">
          {priceList.map((category, idx) => (
            <div key={idx} className="category-card">
              <div className="category-header">
                <h3 className="category-title">{category.category}</h3>
              </div>
              <ul className="price-list">
                {category.items.map((item, i) => (
                  <li key={i} className="price-item">
                    <span className="item-name">{item.title}</span>
                    <span className="item-price">
                      {item.price === null ? 'по запросу' : item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Prices;
