import { portfolios } from '../../../data/portfolios';
import CardPortfolio from '../CardPorfolio/CardPortfolio';

const SectionPortfolios = () => (
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

export default SectionPortfolios;
