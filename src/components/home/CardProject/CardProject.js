import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { replaceComma } from '../../../utils';
import styles from './CardProject.module.scss';

const CardProject = ({
  title, description, builtwith, link, github,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`card border-0 shadow ${resolvedTheme === 'dark' ? styles.card_project_dark : styles.card_project_light}`}>
      <div className={`card-header border-0 py-3 ${styles.bg_card}`}>
        <div className="row justify-content-between">
          <div className="col-auto">
            <FontAwesomeIcon className={`text-${resolvedTheme === 'dark' ? 'info' : 'dark'}`} size="2x" icon={faCode} />
          </div>
          <div className="col-auto my-auto">
            <div className="d-flex flex-nowrap">
              <a
                className={
                  link
                    ? `link link-${resolvedTheme === 'dark' ? 'info' : 'dark'} me-2`
                    : 'text-muted opacity-50 me-2'
                }
                href={link || undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  fixedWidth
                  icon={faArrowUpRightFromSquare}
                />
              </a>
              <a
                className={
                  github
                    ? `link link-${resolvedTheme === 'dark' ? 'info' : 'dark'}`
                    : 'text-muted opacity-50'
                }
                href={github || undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon fixedWidth icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className={`card-title ${resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}`}>{title}</h5>
        <p className={`${resolvedTheme === 'dark' ? 'text' : 'text-secondary'} ${styles.description}`}>{description}</p>
      </div>
      <div className={`card-footer border-0 ${styles.bg_card}`}>
        <p className={`code text-${resolvedTheme === 'dark' ? 'info' : 'secondary'}`}>{replaceComma(builtwith)}</p>
      </div>
    </div>
  );
};

export default CardProject;
