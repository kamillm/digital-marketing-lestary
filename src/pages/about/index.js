import Head from 'next/head';
import Layout from '../../components/global/Layout/Layout';
import SectionContact from '../../components/home/SectionContact/SectionContact';

const About = () => (
  <>
    <Head>
      <title>Lestary Media - Tingkatkan omzet dengan strategi yang tepat</title>
      <meta name="title" content="Lestary Media - Tingkatkan omzet dengan strategi yang tepat" />
      <meta
        name="description"
        content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
      />
      <meta
        name="keywords"
        content="novan, junaedi, novan junaedi, reactjs, react, nextjs, next, frontend, frontend developer, developer, codepolitan, coding, code, programmer, programming, website, web, javascript, dicoding, freelance, freelancer, portfolio"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lestarymedia.com" />
      <meta property="og:title" content="Lestary Media - Tingkatkan omzet dengan strategi yang tepat" />
      <meta
        property="og:description"
        content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
      />
      <meta property="og:image" content="/assets/img/OG-image.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://lestarymedia.com" />
      <meta
        property="twitter:title"
        content="Lestary Media - Tingkatkan omzet dengan strategi yang tepat"
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
          <h1 className="section-title mb-5">Tentang Kami</h1>
          <p className="lead lh-lg">Selamat datang di Lestary Media – Pemimpin Inovasi Digital di Jantung Bandung. Berdiri sejak tahun 2023, kami adalah agensi pemasaran digital yang tidak hanya berkomitmen untuk merubah, tetapi juga memberdayakan bisnis melalui langkah-langkah revolusioner dalam dunia digital.</p>
          <p className="lead lh-lg">Kami memahami bahwa keberhasilan suatu bisnis tidak hanya bergantung pada produk atau layanan, tetapi juga pada cara efektif mencapai dan berkomunikasi dengan audiens. Inilah mengapa Lestary Media hadir, membawa visi baru untuk mewujudkan potensi penuh bisnis Anda.</p>
          <p className="lead lh-lg">Berbasis di Bandung, kota kreatif yang penuh inspirasi, kami memiliki tim profesional yang terus berinovasi untuk memberikan solusi pemasaran digital yang terbaik. Dari strategi SEO yang memikat hingga kampanye iklan yang mengesankan, kami fokus pada keberhasilan Anda.</p>
          <p className="lead lh-lg">Bersama Lestary Media, Anda tidak hanya mendapatkan layanan digital marketing terdepan, tetapi juga mitra yang peduli dan penuh dedikasi. Kami berkomitmen untuk membantu Anda mencapai tujuan bisnis Anda melalui langkah-langkah digital yang cerdas dan efektif.</p>
          <p className="lead lh-lg">Mari berkolaborasi bersama kami dan temukan bagaimana Lestary Media dapat membawa bisnis Anda ke tingkat berikutnya dalam era digital ini. Keberhasilan bisnis Anda adalah prioritas utama kami, dan kami siap menjadi bagian dari perjalanan kesuksesan Anda.</p>
        </div>
      </section>
      <SectionContact />
    </Layout>
  </>
);

export default About;
