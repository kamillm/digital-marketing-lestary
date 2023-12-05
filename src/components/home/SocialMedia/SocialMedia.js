import {
  FaInstagram, FaFacebook, FaLinkedin,
} from 'react-icons/fa';
import {
  FaXTwitter, FaThreads,
} from 'react-icons/fa6';

const SocialMedia = () => (
  <div className="d-inline-flex gap-4">
    <a className="link-light" href="https://instagram.com/novanjunaedi" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} title="Instagram" />
    </a>
    <a className="link-light" href="https://facebook.com/novanjunaedi98" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={20} title="Facebook" />
    </a>
    <a className="link-light" href="https://threads.net/novanjunaedi" target="_blank" rel="noopener noreferrer">
      <FaThreads size={20} title="Threads" />
    </a>
    <a className="link-light" href="https://twitter.com/novanjunaedi98" target="_blank" rel="noopener noreferrer">
      <FaXTwitter size={20} title="Twitter / X" />
    </a>
    <a className="link-light" href="https://linkedin.com/in/novanjunaedi" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={20} title="LinkedIn" />
    </a>
  </div>
);

export default SocialMedia;
