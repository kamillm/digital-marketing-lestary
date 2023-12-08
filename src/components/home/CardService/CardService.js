import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CardService = ({ title, description, link }) => (
  <div className="card border-0 shadow rounded-4 h-100">
    <div className="card-body">
      <h5 className="card-title display-6 my-3">{title}</h5>
      <p className="text-dark">{description}</p>
      {link && (
        <Link className="link link-dark my-3 float-end" href={link}>Selengkapnya <FaArrowRight /></Link>
      )}
    </div>
  </div>
);

export default CardService;
