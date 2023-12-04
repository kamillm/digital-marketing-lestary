import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';

const ItemVolunteering = ({
  title, date, organizer, link,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <li>
      <h5 className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}>{title}</h5>
      <p className={`${resolvedTheme === 'dark' ? 'text' : 'text-dark'} m-0`}>{date}</p>
      <p className={resolvedTheme === 'dark' ? 'text' : 'text-dark'}>
        Organized by
        {' '}
        {organizer}
      </p>
      <a className={link ? `link link-${resolvedTheme === 'dark' ? 'info' : 'dark'}` : 'link link-secondary opacity-50'} target="_blank" rel="noopener noreferrer" href={link || undefined}>
        View Certificate
        <FontAwesomeIcon className="ms-2" fixedWidth icon={faArrowUpRightFromSquare} />
      </a>
    </li>
  );
};

export default ItemVolunteering;
