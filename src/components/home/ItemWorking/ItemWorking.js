import { useTheme } from 'next-themes';

const ItemWorking = ({
  title, workplace, link, time, type, responsibilities,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="mb-5">
      <h5 className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}>
        {title}
        {' '}
        at
        {' '}
        {link ? (<a className={resolvedTheme === 'dark' ? 'link link-info' : 'link-dark'} href={link} target="_blank" rel="noopener noreferrer">{workplace}</a>) : workplace}
      </h5>
      <p className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}>
        <span className="badge bg-info text-dark">{type}</span>
        <span className="mx-2">|</span>
        {time}
      </p>
      <ul>
        {responsibilities.map((item, index) => (
          <li className={`my-2 ${resolvedTheme === 'dark' ? 'text' : 'text-dark'} text`} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemWorking;
