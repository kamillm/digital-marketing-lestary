import Link from 'next/link';
import { useTheme } from 'next-themes';
import { projects } from '../../../../public/data';
import CardProject from '../CardProject/CardProject';

const SectionProject = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <div className="container p-4 p-lg-5" data-aos="fade-up">
        <div className="row">
          <div className="col text-center">
            <h2 className={`section-title ${resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}`}>Other Projects</h2>
          </div>
        </div>
        <div className="row my-3">
          {projects.filter((project) => !project.featured).map((project, index) => (
            <div className="col-md-6 col-xl-4 p-3" key={index}>
              <CardProject
                title={project.title}
                description={project.description}
                builtwith={project.built_with}
                link={project.link}
                github={project.github}
              />
            </div>
          ))
            .reverse()
            .slice(0, 6)}
        </div>
        <div className="row">
          <div className="col text-center">
            <Link className={`btn btn-outline-${resolvedTheme === 'dark' ? 'info' : 'dark'} rounded-pill py-2 px-4`} href="/archive">
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
