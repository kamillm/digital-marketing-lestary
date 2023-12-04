import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  BsCheck, BsLaptop, BsMoon, BsSun,
} from 'react-icons/bs';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="dropdown my-auto">
      <button
        className="btn btn-sm border-0 p-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {resolvedTheme === 'dark' ? (
          <BsMoon className="text-info" />
        ) : (
          <BsSun className="text-dark" />
        )}
      </button>

      <ul className="dropdown-menu">
        <li>
          <button type="button" className="dropdown-item" onClick={() => setTheme('light')}>
            <BsSun className="mb-1" /> Light {theme === 'light' && <BsCheck />}
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item" onClick={() => setTheme('dark')}>
            <BsMoon className="mb-1" /> Dark {theme === 'dark' && <BsCheck />}
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item" onClick={() => setTheme('system')}>
            <BsLaptop className="mb-1" /> System{' '}
            {theme === 'system' && <BsCheck />}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeSwitch;
