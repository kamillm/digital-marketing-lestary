import {
  FaInstagram, FaFacebook, FaLinkedin,
} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="d-inline-flex gap-4">
    <a className="link-light" href="https://www.instagram.com/lestarymedia/" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} title="Instagram" />
    </a>
    <a className="link-light" href="https://facebook.com/lestarymedia" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={20} title="Facebook" />
    </a>
    <a className="link-light" href="https://linkedin.com/company/lestarymedia" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={20} title="LinkedIn" />
    </a>
  </div>
);

export default SocialMedia;
