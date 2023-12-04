const CardService = ({ title, description }) => (
  <div className="card border-0 shadow rounded-4 h-100">
    <div className="card-body">
      <h5 className="card-title display-5 my-3">{title}</h5>
      <p className="text-dark">{description}</p>
    </div>
  </div>
);

export default CardService;
