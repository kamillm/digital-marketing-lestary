import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { replaceComma } from '../../../utils';
import styles from './CardFeatured.module.scss';

const CardFeatured = ({
  thumbnail, title, role, description, builtwith, link, github,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`card border-0 shadow h-100 ${resolvedTheme === 'dark' ? styles.card_featured_dark : styles.card_featured_light}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-xl-7 mb-4 mb-xl-0">
            <div className={styles.img_container}>
              <Zoom>
                <Image
                  className="img-fluid rounded-4 border border-dark border-2"
                  height={500}
                  width={1000}
                  src={thumbnail}
                  placeholder="blur"
                  blurDataURL="/assets/img/placeholder.jpg"
                  alt={title}
                />
              </Zoom>
            </div>
          </div>
          <div className="col-xl-5 my-auto">
            <h5 className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}>{title}</h5>
            <p className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}>
              Role:
              {' '}
              {role}
            </p>
            <p className={`${styles.description} ${resolvedTheme === 'dark' ? 'text' : 'text-secondary'}`}>{description}</p>
            <p className={`code text-${resolvedTheme === 'dark' ? 'info' : 'secondary'}`}>{replaceComma(builtwith)}</p>
            <div className="d-flex gap-2">
              <a
                className={
                  link
                    ? `link text-${resolvedTheme === 'dark' ? 'info' : 'dark'} me-2`
                    : 'link text-muted opacity-50 me-2'
                }
                href={link || undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon fixedWidth icon={faArrowUpRightFromSquare} /> Visit website
              </a>
              <a
                className={
                  github
                    ? `link text-${resolvedTheme === 'dark' ? 'info' : 'dark'}`
                    : 'link text-muted opacity-50'
                }
                href={github || undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon fixedWidth icon={faGithub} /> See on Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFeatured;
