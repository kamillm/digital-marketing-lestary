const CardTestimonial = ({
  name, job, caption, thumbnail,
}) => (
  <div className="card border-0 shadow" style={{ borderRadius: '15px', background: '#343a41' }}>
    <div className="card-body text-white">
      <div className="d-flex align-items-start">
        <img style={{ height: '7em', width: '7em', objectFit: 'cover' }} className="card-img rounded-circle border border-2 border-info my-auto" src={thumbnail} alt={name} />
        <div className="ms-3 my-auto">
          <h5 className="card-title">{name}</h5>
          <small className="card-subtitle text-info">{job}</small>
        </div>
      </div>
      <p className="text my-3">{`"${caption}"`}</p>
    </div>
  </div>
);

export default CardTestimonial;
