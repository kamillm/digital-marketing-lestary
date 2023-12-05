import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from 'hamburger-react';
import { useTheme } from 'next-themes';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { resolvedTheme } = useTheme();
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
    <nav className={`navbar navbar-expand-lg ${resolvedTheme === 'dark' ? 'navbar-dark' : 'navbar-light'} fixed-top ${shadow || isOpen ? `${resolvedTheme === 'dark' ? styles.bg_glass_dark : styles.bg_glass_light} shadow` : styles.bg_transparent}`}>
      <div className="container py-1 px-4 px-lg-5">
        <div className="d-inline-flex gap-2">
          <Link className="navbar-brand my-auto" href="/">
            <Image src={resolvedTheme === 'dark' ? '/assets/img/logo-white.png' : '/assets/img/logo-dark.png'} className="mt-1" height={40} width={180} alt="Novan Junaedi" />
          </Link>
        </div>

        <button className="navbar-toggler border-0 shadow-none p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Hamburger color={resolvedTheme === 'dark' ? '#0dcaf0' : '#343a41'} size={23} toggled={isOpen} toggle={setOpen} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto my-2 gap-3 my-lg-0 text-center text-lg-start">
            <li className="nav-item">
              <Link className={router.asPath === '/#services' ? 'nav-link fw-bolder' : 'nav-link'} href="/#services">
                Layanan
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className={router.asPath === '/#featured' ? `nav-link fw-bolder` : 'nav-link'} href="/#featured">
                Portofolio
              </Link>
            </li> */}
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
            <Link className={`btn btn-outline-${resolvedTheme === 'dark' ? 'info' : 'dark'} px-3`} href="https://bit.ly/3QnQFTA" target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
