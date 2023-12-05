import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => (
  <section className={`${styles.hero}`}>
    <div className="container p-4 p-lg-5">
      <div className="row justify-content-between" data-aos="fade-up">
        <div className="col-xl-6 my-auto text-center text-xl-start">
          <h1 className={styles.hero_title}>Tingkatkan Omzet dengan Strategi Digital yang Tepat.</h1>
          <p className={`${styles.hero_subtitle} lead my-4`}>Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!</p>
          <Link className="btn btn-dark rounded-pill px-5 py-3 mt-2" href="#intro">
            Pelajari lebih lanjut <FaArrowRight />
          </Link>
        </div>
        <div className="col-xl-6 my-auto">
          <Image
            className="img-fluid d-block mx-auto"
            width={1000}
            height={500}
            src="/assets/img/img-hero.png"
            blurDataURL="/assets/img/img-hero.png"
            placeholder="blur"
            alt="Novan Junaedi"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
