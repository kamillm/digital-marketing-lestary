import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/global/Layout/Layout';
import SectionContact from '../../components/home/SectionContact/SectionContact';

const About = () => {
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
    <>
      <Head>
        <title>Tentang Kami - Lestary Media</title>
        <meta name="title" content="Tentang Kami - Lestary Media" />
        <meta
          name="description"
          content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
        />
        <meta
          name="keywords"
          content="novan, junaedi, novan junaedi, reactjs, react, nextjs, next, frontend, frontend developer, developer, codepolitan, coding, code, programmer, programming, website, web, javascript, dicoding, freelance, freelancer, portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lestarymedia.com/about" />
        <meta property="og:title" content="Tentang Kami - Lestary Media" />
        <meta
          property="og:description"
          content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
        />
        <meta property="og:image" content="/assets/img/OG-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lestarymedia.com/about" />
        <meta
          property="twitter:title"
          content="Tentang Kami - Lestary Media"
        />
        <meta
          property="twitter:description"
          content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
        />
        <meta property="twitter:image" content="/assets/img/OG-image.jpg" />
      </Head>
      <Layout>
        <section className="mt-5 pt-5" data-aos="fade-up">
          <div className="container p-4 p-lg-5">
            <div className="row">
              <div className="col-xl-6">
                <h1 className="section-title mb-4">Tentang Kami</h1>
                <p className="lh-lg">Selamat datang di Lestary Media – Pemimpin Inovasi Digital di Jantung Bandung. Berdiri sejak tahun 2023, kami adalah agensi pemasaran digital yang tidak hanya berkomitmen untuk merubah, tetapi juga memberdayakan bisnis melalui langkah-langkah revolusioner dalam dunia digital.</p>
                <p className="lh-lg">Kami memahami bahwa keberhasilan suatu bisnis tidak hanya bergantung pada produk atau layanan, tetapi juga pada cara efektif mencapai dan berkomunikasi dengan audiens. Inilah mengapa Lestary Media hadir, membawa visi baru untuk mewujudkan potensi penuh bisnis Anda.</p>
                <p className="lh-lg">Berbasis di Bandung, kota kreatif yang penuh inspirasi, kami memiliki tim profesional yang terus berinovasi untuk memberikan solusi pemasaran digital yang terbaik. Dari strategi SEO yang memikat hingga kampanye iklan yang mengesankan, kami fokus pada keberhasilan Anda.</p>
                <p className="lh-lg">Bersama Lestary Media, Anda tidak hanya mendapatkan layanan digital marketing terdepan, tetapi juga mitra yang peduli dan penuh dedikasi. Kami berkomitmen untuk membantu Anda mencapai tujuan bisnis Anda melalui langkah-langkah digital yang cerdas dan efektif.</p>
                <p className="lh-lg">Mari berkolaborasi bersama kami dan temukan bagaimana Lestary Media dapat membawa bisnis Anda ke tingkat berikutnya dalam era digital ini. Keberhasilan bisnis Anda adalah prioritas utama kami, dan kami siap menjadi bagian dari perjalanan kesuksesan Anda.</p>
              </div>
              <div className="col-xl-6">
                <Image
                  className="img-fluid rounded-4"
                  width={1000}
                  height={400}
                  src={'https://i.ibb.co/9gg8wxr/about.jpg' || '/assets/img/placeholder.jpg'}
                  blurDataURL={'https://i.ibb.co/9gg8wxr/about.jpg' || '/assets/img/placeholder.jpg'}
                  placeholder="blur"
                  alt="About Us"
                />

                <div className="card rounded-4 border-0 shadow-sm mt-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 p-2">
                        <div className="card bg-light border-0 rounded-4">
                          <div className="card-body">
                            <p className="h3">1+</p>
                            <p className="mb-0">Tahun Pengalaman</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 p-2">
                        <div className="card bg-light border-0 rounded-4">
                          <div className="card-body">
                            <p className="h3">{clients?.length}</p>
                            <p className="mb-0">Klien</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 p-2">
                        <div className="card bg-light border-0 rounded-4">
                          <div className="card-body">
                            <p className="h3">5</p>
                            <p className="mb-0">Proyek Ditangani</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 p-2">
                        <div className="card bg-light border-0 rounded-4">
                          <div className="card-body">
                            <p className="h3">100%</p>
                            <p className="mb-0">Penyelesaian</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="h5 text-center mt-5 pt-5 mb-3">Klien Kami</p>
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
        <SectionContact />
      </Layout>
    </>
  );
};

export default About;
