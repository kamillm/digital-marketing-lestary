import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`bg-${resolvedTheme} min-vh-100 d-flex justify-content-center align-items-center`}>
        <div className={`spinner-border text-${resolvedTheme === 'dark' ? 'info' : 'dark'}`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className={resolvedTheme === 'dark' ? 'bg-dark' : 'bg-light'} id="main">
        {children}
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        transition={Slide}
        theme={resolvedTheme}
      />
    </>
  );
};

export default Layout;
