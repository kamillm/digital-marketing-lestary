import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => {
  const clients = [
    {
      thumbnail: '/assets/img/sbo.png',
      name: 'Sekolah Bisnis Online',
      link: 'https://sekolahbisnisonline.id',
    },
    {
      thumbnail: '/assets/img/morotai.png',
      name: 'Kabupaten Morotai',
      link: 'https://pulaumorotaikab.go.id',
    },
    {
      thumbnail: '/assets/img/malasso.png',
      name: 'Malasso Bali',
      link: 'https://malasso.id',
    },
  ];

  return (
    <section className={`${styles.hero}`} data-aos="fade-up">
      <div className="container p-4 p-lg-5">
        <div className="row justify-content-between">
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

        <p className="lead text-center mt-5 pt-5 mb-3">Telah dipercaya oleh</p>
        <div className="row justify-content-center">
          {clients.map((client, index) => (
            <div className="col-auto p-2" key={index}>
              <a className="link" href={client.link} target="_blank" rel="noopener noreferrer">
                <Image
                  style={{ objectFit: 'contain' }}
                  width={150}
                  height={100}
                  src={client.thumbnail}
                  blurDataURL={client.thumbnail}
                  placeholder="blur"
                  alt={client.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
