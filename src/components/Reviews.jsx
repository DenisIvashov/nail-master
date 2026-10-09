function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Анна",
      text: "Хожу к мастеру уже полгода — всегда аккуратный маникюр, держится идеально. Очень нравится, что подбирают дизайн под настроение.",
      avatar: "images/avatars/anna.jfif", // путь к фото или заглушке
    },
    {
      id: 2,
      name: "Марина",
      text: "Впервые попробовала наращивание на верхних формах — результат превзошёл ожидания. Ногти выглядят натурально и совсем не мешают.",
      avatar: "images/avatars/marina.jfif",
    },
    {
      id: 3,
      name: "Елена",
      text: "Очень уютная атмосфера и бережное отношение к коже. После SPA-ухода руки стали заметно мягче — теперь это мой любимый ритуал.",
      avatar: "images/avatars/elena.png",
    },
  ];

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Отзывы клиентов</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-avatar-wrapper">
                <img
                  src={review.avatar}
                  alt={`Отзыв от \${review.name}`}
                  className="review-avatar"
                  loading="lazy"
                />
              </div>
              <div className="review-content">
                <h4 className="review-name">{review.name}</h4>
                <p className="review-text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
