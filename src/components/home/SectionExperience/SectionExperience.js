/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
import { jobs, certificates, volunteering } from '/public/data';
import { useTheme } from 'next-themes';
import ItemCertification from '../ItemCertification/ItemCertification';
import ItemVolunteering from '../ItemVolunteering/ItemVolunteering';
import ItemWorking from '../ItemWorking/ItemWorking';

const SectionExperience = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section id="experiences">
      <div className="container p-4 p-lg-5">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 mb-4 mb-xl-5">
            <h2 className={`section-title ${resolvedTheme === 'dark' ? 'text-light' : 'text-dark'} mb-3`}>My Experiences</h2>
            <div className="nav nav-pills text-nowrap overflow-auto flex-nowrap flex-lg-column me-xl-3" id={resolvedTheme === 'dark' ? 'experience-tab-dark' : 'experience-tab-light'} role="tablist" aria-orientation="vertical">
              <button className="nav-link text-start active" id="working-tab" data-bs-toggle="pill" data-bs-target="#working" type="button" role="tab" aria-controls="working" aria-selected="true">Working Experience</button>
              <button className="nav-link text-start" id="volunteering-tab" data-bs-toggle="pill" data-bs-target="#volunteering" type="button" role="tab" aria-controls="volunteering" aria-selected="false">Volunteering Experience</button>
              <button className="nav-link text-start" id="certification-tab" data-bs-toggle="pill" data-bs-target="#certification" type="button" role="tab" aria-controls="certification" aria-selected="false">Professional Certification</button>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane mt-lg-2 fade show active" id="working" role="tabpanel" aria-labelledby="working-tab">
                {jobs.map((job, index) => (
                  <ItemWorking
                    key={index}
                    title={job.title}
                    workplace={job.workplace}
                    link={job.link}
                    type={job.type}
                    time={job.time}
                    responsibilities={job.responsibilities}
                  />
                )).reverse()}
              </div>
              <div className="tab-pane fade" id="volunteering" role="tabpanel" aria-labelledby="volunteering-tab">
                <ul className={resolvedTheme === 'dark' ? 'timeline-dark' : 'timeline-light'}>
                  {volunteering.map((item, index) => (
                    <ItemVolunteering
                      key={index}
                      title={item.title}
                      date={item.date}
                      organizer={item.organizer}
                      link={item.link}
                    />
                  )).reverse()}
                </ul>
              </div>
              <div className="tab-pane fade" id="certification" role="tabpanel" aria-labelledby="certification-tab">
                <ul className={resolvedTheme === 'dark' ? 'timeline-dark' : 'timeline-light'}>
                  {certificates.map((certificate, index) => (
                    <ItemCertification
                      key={index}
                      title={certificate.title}
                      institution={certificate.institution}
                      date={certificate.date}
                      link={certificate.link}
                    />
                  )).reverse()}
                </ul>
                <a className={`btn btn-outline-${resolvedTheme === 'dark' ? 'info' : 'dark'} mt-3 ms-5`} href="http://linkedin.com/in/novanjunaedi/details/certifications/" target="_blank" rel="noopener noreferrer">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
