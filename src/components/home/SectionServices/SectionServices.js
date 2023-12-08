import CardService from '../CardService/CardService';

const SectionServices = () => {
  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Naikkan peringkat, raih visibilitas maksimal. Dengan layanan SEO kami, hadirkan bisnis Anda ke puncak hasil pencarian. Optimalkan online presence Anda dan tingkatkan trafik organik. Sukses di dunia digital dimulai dengan strategi SEO yang tepat. Bersama, kita tingkatkan posisi dan hadirkan keberhasilan digital bagi bisnis Anda!',
      link: '/blogs/memahami-seo-panduan-singkat-untuk-meraih-posisi-teratas-di-mesin-pencari',
    },
    {
      title: 'Performance Marketing',
      description: 'Tingkatkan eksposur, capai hasil maksimal. Manfaatkan kekuatan iklan digital dengan layanan kami. Targetkan audiens tepat, optimalkan konversi. Bisnis Anda layak mendapatkan sorotan, dan kami di sini untuk memastikan itu terjadi. Aktifkan potensi penuh bisnis Anda melalui kampanye iklan yang efektif dan relevan!',
      link: '',
    },
    {
      title: 'Social Media Management',
      description: 'Optimalkan kehadiran digital Anda dengan Social Media Management kami. Dari strategi konten hingga interaksi autentik, kami membantu menciptakan narasi yang tak terlupakan. Manfaatkan potensi media sosial untuk keberhasilan yang signifikan bersama kami.',
      link: '',
    },
    {
      title: 'Product Development',
      description: 'Jelajahi potensi tanpa batas melalui inovasi produk bersama kami. Dengan pendekatan terstruktur dan fokus pada keunggulan, tim pengembangan produk kami siap membawa visi Anda menjadi kenyataan. Hadirkan perubahan positif melalui solusi yang dirancang khusus untuk menciptakan pengalaman produk tak terlupakan.',
      link: '',
    },
  ];
  return (
    <section id="services" data-aos="fade-up">
      <div className="container p-4 p-lg-5">
        <h2 className="section-title">Layanan</h2>
        <p className="lead w-50">Layanan-layanan unggulan kami yang mungkin cocok dengan kebutuhan Anda</p>

        <div className="row my-4">
          {services.map((service, index) => (
            <div className="col-md-6 p-3" key={index}>
              <CardService
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
