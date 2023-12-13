import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from 'hamburger-react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const addShadow = () => {
      if (window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', addShadow);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${shadow || isOpen ? `${styles.bg_glass_light} shadow` : styles.bg_transparent}`}>
      <div className="container py-1 px-4 px-lg-5">
        <div className="d-inline-flex gap-2">
          <Link className="navbar-brand my-auto" href="/">
            <Image src="/assets/img/logo-dark.png" className="mt-1" height={40} width={180} alt="Lestary Media" />
          </Link>
        </div>

        <button className="navbar-toggler border-0 shadow-none p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Hamburger color="#343a41" size={23} toggled={isOpen} toggle={setOpen} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto my-2 gap-3 my-lg-0 text-center text-lg-start">
            <li className="nav-item">
              <Link className={router.asPath === '/#services' ? 'nav-link fw-bolder' : 'nav-link'} href="/#services">
                Layanan
              </Link>
            </li>
            <li className="nav-item">
              <Link className={router.asPath === '/#portfolios' ? 'nav-link fw-bolder' : 'nav-link'} href="/#portfolios">
                Portofolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={router.pathname.includes('/blogs') ? 'nav-link fw-bolder' : 'nav-link'} href="/blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className={router.asPath === '/about' ? 'nav-link fw-bolder' : 'nav-link'} href="/about">
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link className={router.asPath === '/#contact' ? 'nav-link fw-bolder' : 'nav-link'} href="/#contact">
                Kontak
              </Link>
            </li>
          </ul>
          <div className="d-grid gap-2 ms-lg-3">
            <Link className="btn btn-outline-dark px-3" href="https://wa.me/6285157785712" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mb-1" /> Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
