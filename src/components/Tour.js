const Tour = (props) => {
  const { id, img, date, title, info, location, duration, price } = props;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${[price]}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
