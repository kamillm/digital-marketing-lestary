import CardPortfolio from '../CardPorfolio/CardPortfolio';

const SectionPortfolios = () => {
  const portfolios = [
    {
      thumbnail: 'https://i.ibb.co/4fTYBXC/3.jpg',
      title: 'Sekolah Bisnis Online',
      type: 'Search Engine Optimization',
      description: 'Lorem ipsum',
    },
    {
      thumbnail: 'https://i.ibb.co/6HcqGFd/mentoringbisnis.png',
      title: 'Mentoring Bisnis by SBO',
      type: 'Product Development',
      description: 'Lorem ipsum',
    },
    {
      thumbnail: 'https://i.ibb.co/SQvqHVM/1.jpg',
      title: 'Sekolah Bisnis Online',
      type: 'Social Media Management',
      description: 'Lorem ipsum',
    },
    {
      thumbnail: 'https://i.ibb.co/jT3n7Sz/4.jpg',
      title: 'E-Kinerja Kab. Morotai',
      type: 'Product Development',
      description: 'Lorem ipsum',
    },
    {
      thumbnail: 'https://i.ibb.co/WWctq8P/2.jpg ',
      title: 'Malasso Bali',
      type: 'Performance Marketing',
      description: 'Lorem ipsum',
    },
  ];
  return (
    <section id="portfolios" data-aos="fade-up" style={{ background: '#F4F4F4' }}>
      <div className="container p-4 p-lg-5">
        <div className="text-center">
          <h2 className="section-title">Portofolio</h2>
          <p className="lead">Beberapa contoh proyek yang kami kerjakan</p>
        </div>

        <div className="row my-4">
          {portfolios.map((portfolio, index) => (
            <div className="col-md-6 col-xl-4 p-3" key={index}>
              <CardPortfolio
                index={index}
                thumbnail={portfolio.thumbnail}
                title={portfolio.title}
                type={portfolio.type}
                description={portfolio.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolios;
