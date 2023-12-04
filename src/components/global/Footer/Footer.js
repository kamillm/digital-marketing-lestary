import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt, FaMarker, FaWhatsapp } from 'react-icons/fa';
import SocialMedia from '../../home/SocialMedia/SocialMedia';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className="bg-dark text-white">
        <div className="container px-5">
          <div className="row py-5">
            <div className="col-lg-4">
              <Image src="/assets/img/logo-white.png" className="mt-1" height={40} width={180} alt="Novan Junaedi" />
              <p className="my-3">Layanan digital marketing terbaik untuk transformasi online Anda. Desain kreatif, kampanye efektif hadir untuk membawa bisnis Anda ke puncak sukses digital!</p>
              <SocialMedia />
            </div>
            <div className="col-lg-4 mb-4 mb-lg-auto">
              <h5 className="fw-bolder mb-4">Kontak Kami</h5>
              <a className="link-light" href="mailto:info@codepolitan.com">
                <div className="d-flex align-items-start mb-4">
                  <FaEnvelope className="me-2 mt-1" />
                  info@codepolitan.com
                </div>
              </a>
              <a className="link-light" href="https://wa.me/628999488990">
                <div className="d-flex align-items-start mb-4">
                  <FaWhatsapp className="me-2 mt-1" />
                  +62 89 9948 8990
                </div>
              </a>
              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt className="me-2 mt-1" />
                Jl. Permata Raya I No.3, Tanimulya, Ngamprah, Kabupaten Bandung Barat, Jawa Barat, Indonesia
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="fw-bolder mb-4">Lokasi Kami</h5>
              <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.231086634409!2d107.51495515013958!3d-6.862886069027426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e68e46d527c3%3A0x80c53eeb41601c6e!2sCodePolitan!5e0!3m2!1sen!2sid!4v1672041500432!5m2!1sen!2sid" width="100%" height="150px" style={{ border: 0, borderRadius: '15px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                &copy;
                {' '}
                {year}
                {' '}
                Lestary Media. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
