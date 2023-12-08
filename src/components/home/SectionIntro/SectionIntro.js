import Image from 'next/image';

const SectionIntro = () => (
  <section id="intro" data-aos="fade-up">
    <div className="container p-4 p-lg-5">
      <div className="row justify-content-between">
        <div className="col-lg-auto my-auto py-3">
          <Image
            className="img-fluid d-block mx-auto rounded-4"
            width={500}
            height={500}
            src="/assets/img/img-intro.png"
            blurDataURL="/assets/img/img-intro.png"
            placeholder="blur"
            alt="Intro"
          />
        </div>
        <div className="col-lg-6 my-auto py-3">
          <h2 className="section-title mb-4">Kenapa Lestary Media?</h2>
          <p className="lh-lg">Pilih keunggulan, pilih Lestary Media sebagai mitra digital marketing Anda. Dibekali dengan inovasi terdepan dan strategi yang terbukti, kami adalah kunci sukses transformasi digital bisnis Anda. Dari desain yang memukau hingga kampanye pemasaran yang memikat, Lestary Media tidak hanya menjanjikan, tetapi memberikan hasil. Keahlian kami memberdayakan bisnis Anda untuk menembus batas online. Jadi, mengapa memilih yang biasa, jika Anda bisa bersinar dengan yang istimewa? Pilih Lestary Media, pilih keberhasilan digital yang tak tertandingi.</p>

          {/* <div className="row">
            <div className="col-auto">
              <p className="display-5 fw-bolder">10+</p>
              <p>Klien Bergabung</p>
            </div>
            <div className="col-auto">
              <p className="display-5 fw-bolder">40+</p>
              <p>Proyek ditangani</p>
            </div>
            <div className="col-auto">
              <p className="display-5 fw-bolder">100%</p>
              <p>Penyelesaian</p>
            </div>
          </div> */}

          <a className="btn btn-dark rounded-pill px-3" href="https://wa.me/6285157785712" target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a>
        </div>
      </div>
    </div>
  </section>
);

export default SectionIntro;
