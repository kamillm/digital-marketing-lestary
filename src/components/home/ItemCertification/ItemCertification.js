import { faArrowUpRightFromSquare, faBuildingColumns, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';

const ItemCertification = ({
  title, institution, date, link,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <li>
      <h5 className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}>{title}</h5>
      <div className="row my-3">
        <div className={`col-auto ${resolvedTheme === 'dark' ? 'text' : 'text-dark'}`}>
          <FontAwesomeIcon fixedWidth className={`me-2 text-${resolvedTheme === 'dark' ? 'info' : 'dark'}`} icon={faBuildingColumns} />
          {institution}
        </div>
        <div className={`col-auto ${resolvedTheme === 'dark' ? 'text' : 'text-dark'}`}>
          <FontAwesomeIcon fixedWidth className={`me-2 text-${resolvedTheme === 'dark' ? 'info' : 'dark'}`} icon={faCalendar} />
          {date}
        </div>
      </div>
      <a className={link ? `link link-${resolvedTheme === 'dark' ? 'info' : 'dark'}` : 'link link-secondary opacity-50'} target="_blank" rel="noopener noreferrer" href={link || undefined}>
        View Certificate
        <FontAwesomeIcon className="ms-2" fixedWidth icon={faArrowUpRightFromSquare} />
      </a>
    </li>
  );
};

export default ItemCertification;
