function Services() {
  const services = [
    {
      id: 1,
      icon: "💅",
      title: "Маникюр",
      text: "Классический, аппаратный и комбинированный маникюр. Покрытие гель-лаком, укрепление, дизайн. Аккуратно, безопасно, с учётом ваших пожеланий.",
    },
    {
      id: 2,
      icon: "🦶",
      title: "Педикюр",
      text: "Полный уход за стопами: обработка, удаление мозолей и натоптышей, покрытие гель-лаком. Работаю с чувствительной кожей.",
    },
    {
      id: 3,
      icon: "✨",
      title: "SPA-уход",
      text: "Питательные маски, пилинг, массаж рук и стоп, парафинотерапия. Восстановление и глубокое увлажнение кожи.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="services-card">
            <div className="services-icon">{service.icon}</div>
            <h3 className="services-title">{service.title}</h3>
            <p className="services-text">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );  
}

export default Services;