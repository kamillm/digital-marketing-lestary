import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaYarn,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiVercel,
} from 'react-icons/si';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import styles from './SectionAbout.module.scss';

const SectionAbout = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className={resolvedTheme === 'dark' ? 'text' : 'text-dark'} id="about">
      <div className="container p-4 p-lg-5">
        <div className="row justify-content-between" data-aos="fade-up">
          <div className="col-lg-7 my-auto">
            <h2 className={`section-title ${resolvedTheme === 'dark' ? 'text-white' : 'text-dark'}`}>
              About me
              <span className="blink">_</span>
            </h2>
            <p className="lh-lg">
              Hi, my name is Novan Junaedi. I&apos;m a frontend developer and
              freelancer based in Bandung, Indonesia. Currently, I&apos;m focused
              on building and maintaining websites at
              {' '}
              <a
                className={resolvedTheme === 'dark' ? 'link link-info' : 'link-dark'}
                href="https://codepolitan.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codepolitan
              </a>
              .
            </p>
            <p className="lh-lg">
              My interest in web development started back in 2017 when I decided
              to create a blog page. I was curious about customizing the theme of
              my blog because the default themes didn&apos;t appeal to me. So, I
              started searching the internet for ways to customize it myself. I
              ended up learning a lot about HTML and CSS, which seemed quite
              unfamiliar to me at the time.
            </p>
            <p className="lh-lg">
              Later, when I was in college, a friend informed me about a
              scholarship program offering free online web development courses.
              I took that opportunity to further enhance my knowledge in web development,
              especially frontend development. The program taught me a lot about
              web development so I could understand how the website works,
              what technology behind them and offcourse code it myself.
            </p>
            <p className="lh-lg">
              Currently, I assist companies in creating scalable web apps and
              user-friendly interfaces to provide the best digital experience for
              website users.
            </p>
            <p className="lh-lg">
              Here are some of the tools and technologies I use on a daily basis
            </p>
            <div className="text-center text-md-start">
              <FaHtml5
                color="#FFA41B"
                className="my-2 me-2"
                size={40}
                title="HTML5"
              />
              <FaCss3Alt
                color="#78C1F3"
                className="my-2 me-2"
                size={40}
                title="CSS3"
              />
              <FaJsSquare
                color="#F4D160"
                className="my-2 me-2"
                size={40}
                title="JavaScript ES6+"
              />
              <FaSass
                color="#FF9EAA"
                className="my-2 me-2"
                size={40}
                title="Sass"
              />
              <FaBootstrap
                color="#C4B0FF"
                className="my-2 me-2"
                size={40}
                title="Bootstrap 5"
              />
              <FaReact
                color="#75C2F6"
                className="my-2 me-2"
                size={40}
                title="React"
              />
              <SiNextdotjs
                color="#FFFFF"
                className="my-2 me-2"
                size={40}
                title="Next Js"
              />
              <SiRedux
                color="#7895CB"
                className="my-2 me-2"
                size={40}
                title="Redux Toolkit"
              />
              <FaNodeJs
                color="#A2FF86"
                className="my-2 me-2"
                size={40}
                title="Node Js"
              />
              <FaYarn
                color="#4FC0D0"
                className="my-2 me-2"
                size={40}
                title="Yarn"
              />
              <FaGitAlt
                color="#F86F03"
                className="my-2 me-2"
                size={40}
                title="Git"
              />
              <SiFirebase
                color="#FFB84C"
                className="my-2 me-2"
                size={40}
                title="Firebase"
              />
              <SiVercel
                color="#FFFFF"
                className="my-2"
                size={40}
                title="Vercel"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <Image
              className={`img-fluid d-block mx-auto ${styles.about_img}`}
              width={500}
              height={500}
              src={resolvedTheme === 'dark' ? '/assets/img/about-img-dark.png' : '/assets/img/about-img-light.png'}
              blurDataURL="/assets/img/about-img.png"
              placeholder="blur"
              alt="Novan Junaedi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
