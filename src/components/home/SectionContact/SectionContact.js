import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const SectionContact = () => (
  <section className="text-dark" id="contact">
    <div className="container p-4 p-lg-5" data-aos="fade-up">
      <div className="card bg-dark text-white text-center rounded-4">
        <div className="card-body d-flex flex-column align-items-center justify-content-center p-5">
          <span className="mb-4 h5">Siap untuk memulai?</span>
          <h2 className="section-title display-3">Ayo kembangkan bisnis Anda bersama kami!</h2>
          <Link className="btn btn-light rounded-pill py-2 btn-lg px-4 mt-4" href="https://wa.me/6285157785712?text=Halo, saya mau berkonsultasi. Mohon dibantu.">
            <FaWhatsapp className="mb-1" /> Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default SectionContact;
