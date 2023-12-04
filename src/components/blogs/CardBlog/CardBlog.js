import Image from 'next/image';
import { FaArrowRight, FaRegClock } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import styles from './CardBlog.module.scss';

const CardBlog = ({
  thumbnail, title, createdAt, description, readingTime,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`${resolvedTheme === 'dark' ? styles.card_blog_dark : styles.card_blog} card border-0 rounded-4 shadow h-100`}>
      <div className="card-body">
        <div className="mb-3">
          <Image
            className="img-fluid rounded-4"
            height={500}
            width={1000}
            src={thumbnail}
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            alt={title}
          />
        </div>
        <h5 className="fw-bold mb-1">{title}</h5>
        <small>
          {createdAt}
        </small>
        <p className={`${resolvedTheme === 'dark' ? 'text' : 'text-secondary'} my-3`}>{description}</p>
      </div>
      <div className="card-footer bg-transparent border-0">
        <div className="d-flex justify-content-between">
          <span className={`${resolvedTheme === 'dark' ? 'text' : 'text-secondary'} my-3`}>
            <FaRegClock className="me-2" />
            {readingTime}
            {' '}
            min read
          </span>
          <div className="my-3">
            <span className={`link link-${resolvedTheme === 'dark' ? 'info' : 'secondary'}`}>
              Read more
              <FaArrowRight className="ms-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
