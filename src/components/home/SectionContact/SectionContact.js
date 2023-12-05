import Link from 'next/link';
import { useTheme } from 'next-themes';

const SectionContact = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'} id="contact">
      <div className="container p-4 p-lg-5" data-aos="fade-up">
        <div className="card bg-dark text-white text-center rounded-4">
          <div className="card-body d-flex flex-column align-items-center justify-content-center p-5">
            <span className="mb-4 h5">Siap untuk memulai?</span>
            <h2 className="section-title display-3">Ayo kembangkan bisnis Anda bersama kami!</h2>
            <Link className="btn btn-outline-light rounded-pill py-2 btn-lg px-4 mt-4" href="mailto:junaedinovan98@gmail.com">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
