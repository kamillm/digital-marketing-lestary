import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/global/Layout/Layout';

const NotFound = () => (
  <>
    <Head>
      <title>404 - Lestary Media</title>
      <meta name="title" content="Lestary Media - Tingkatkan omzet dengan strategi yang tepat" />
      <meta
        name="description"
        content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
      />
      <meta
        name="keywords"
        content="digital marketing, agency, bandung, portfolio, social media"
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
      <section className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <Image
                className="img-fluid"
                src="/assets/img/not-found-light.png"
                width={350}
                height={250}
                alt="Not Found"
              />
              <h1 className="fw-bold text-white">
                <span className="text-info me-2">404</span>
                <span className="text-dark">Not Found</span>
              </h1>
              <p className="text-secondary">Page does not exist</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
);

export default NotFound;
