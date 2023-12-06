import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/global/Layout/Layout';

const NotFound = () => (
  <>
    <Head>
      <title>404 - Novan Junaedi</title>
      <meta name="title" content="Novan Junaedi - Frontend Developer" />
      <meta
        name="description"
        content="Hi, my name is Novan Junaedi. I'm a frontend developer and freelancer based in Bandung, Indonesia. Currently, I'm focused on building and maintaining websites at Codepolitan."
      />
      <meta
        name="keywords"
        content="novan, junaedi, novan junaedi, reactjs, react, nextjs, next, frontend, frontend developer, developer, codepolitan, coding, code, programmer, programming, website, web, javascript, dicoding, freelance, freelancer, portfolio"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://novanjunaedi.com" />
      <meta property="og:title" content="Novan Junaedi - Frontend Developer" />
      <meta
        property="og:description"
        content="Hi, my name is Novan Junaedi. I'm a frontend developer and freelancer based in Bandung, Indonesia. Currently, I'm focused on building and maintaining websites at Codepolitan."
      />
      <meta property="og:image" content="/assets/img/OG-image.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://novanjunaedi.com" />
      <meta
        property="twitter:title"
        content="Novan Junaedi - Frontend Developer"
      />
      <meta
        property="twitter:description"
        content="Hi, my name is Novan Junaedi. I'm a frontend developer and freelancer based in Bandung, Indonesia. Currently, I'm focused on building and maintaining websites at Codepolitan."
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
