import {
  faFacebook,
  faLinkedin,
  faTelegramPlane,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonShareSocmed.module.scss';

const ButtonShareSocmed = ({ type, link }) => (
  <>
    {type === 'facebook' && (
      <a
        className={`btn ${styles.btn_facebook} btn-sm rounded-pill me-2 mb-2`}
        href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="me-2" icon={faFacebook} />
        Facebook
      </a>
    )}
    {type === 'twitter' && (
      <a
        className={`btn ${styles.btn_twitter} btn-sm rounded-pill me-2 mb-2`}
        href={`https://twitter.com/intent/tweet?url=${link}`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="me-2" icon={faTwitter} />
        Twitter
      </a>
    )}
    {type === 'linkedin' && (
      <a
        className={`btn ${styles.btn_linkedin} btn-sm rounded-pill me-2 mb-2`}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="me-2" icon={faLinkedin} />
        LinkedIn
      </a>
    )}
    {type === 'whatsapp' && (
      <a
        className={`btn ${styles.btn_whatsapp} btn-sm rounded-pill me-2 mb-2`}
        href={`whatsapp://send?text=${link}`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="me-2" icon={faWhatsapp} />
        WhatsApp
      </a>
    )}
    {type === 'telegram' && (
      <a
        className={`btn ${styles.btn_telegram} btn-sm rounded-pill me-2 mb-2`}
        href={`https://t.me/share/url?url=${link}`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="me-2" icon={faTelegramPlane} />
        Telegram
      </a>
    )}
  </>
);

export default ButtonShareSocmed;
