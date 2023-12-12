import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const CardPortfolio = ({
  title, description, thumbnail, type,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div onClick={() => setShowDetail(!showDetail)} className="card border-0 shadow-sm rounded-4 h-100" role="button">
      <div className="card-body">
        {!showDetail
          ? (
            <>
              <Image
                className="img-fluid rounded-4"
                height={500}
                width={1000}
                src={thumbnail || '/assets/img/placeholder.jpg'}
                placeholder="blur"
                blurDataURL="/assets/img/placeholder.jpg"
                alt={title}
              />
              <h5 className="card-title my-3">{title}</h5>
              <p className="text-muted">{type}</p>
              <button type="button" className="btn btn-sm float-end">Detail <FaArrowRight className="mb-1" /></button>
            </>
          )
          : (
            <>
              <div className="d-flex justify-content-between">
                <h5 className="card-title my-3">{title}</h5>
                <FaTimes />
              </div>
              <p className="text-muted">{type}</p>
              <p className="text-muted">{description}</p>
            </>
          )}
      </div>
    </div>
  );
};

export default CardPortfolio;
