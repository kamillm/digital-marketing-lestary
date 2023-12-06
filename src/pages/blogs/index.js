import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Layout from '../../components/global/Layout/Layout';
import { readingTime, sortByDate } from '../../utils';

const CardBlog = dynamic(() => import('../../components/blogs/CardBlog/CardBlog'), { ssr: false });

export const getStaticProps = async () => {
  // Get files from posts directory
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create Slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};

const Blogs = ({ posts }) => {
  const [limit, setLimit] = useState(12);
  const [query, setQuery] = useState('');

  const search = (data) => data.filter((post) => post.frontmatter.title
    .toLowerCase().includes(query.toLowerCase()) || post.frontmatter.excerpt
    .toLowerCase().includes(query.toLowerCase()) || post.frontmatter.tags
    .toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Head>
        <title>Blogs - Novan Junaedi</title>
        <meta name="title" content="Novan Junaedi - Frontend Developer" />
        <meta
          name="description"
          content="Hi, my name is Novan Junaedi. I'm a frontend developer and freelancer based in Bandung, Indonesia. Currently, I'm focused on building and maintaining websites at Codepolitan."
        />
        <meta
          name="keywords"
          content="novan, junaedi, novan junaedi, reactjs, react, nextjs, next, frontend, frontend developer, developer, codepolitan, coding, code, programmer, programming, website, web, javascript, dicoding, freelance, freelancer, portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novanjunaedi.com" />
        <meta
          property="og:title"
          content="Novan Junaedi - Frontend Developer"
        />
        <meta
          property="og:description"
          content="Hi, my name is Novan Junaedi. I'm a frontend developer and freelancer based in Bandung, Indonesia. Currently, I'm focused on building and maintaining websites at Codepolitan."
        />
        <meta property="og:image" content="/assets/img/OG-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://novanjunaedi.com" />
        <meta
          property="twitter:title"
          content="Novan Junaedi - Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="Hi, my name is Novan Junaedi. I'm a frontend developer and freelancer based in Bandung, Indonesia. Currently, I'm focused on building and maintaining websites at Codepolitan."
        />
        <meta property="twitter:image" content="/assets/img/OG-image.jpg" />
      </Head>
      <Layout>
        <section style={{ paddingTop: '100px' }}>
          <div className="container p-4 p-lg-5">
            <div className="row mb-5" data-aos="fade-up">
              <div className="col">
                <h1 className="section-title text-dark">Blogs</h1>
                <p className="lead text-dark">
                  Just my random posts about anything
                </p>
              </div>
              <div className="col-lg-3 my-auto">
                <div className="input-group">
                  <span className="input-group-text bg-transparent text-muted border-0 border-bottom border-secondary rounded-0" id="basic-addon1"><FaSearch /></span>
                  <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className="form-control bg-transparent text-dark border-secondary border-0 border-bottom shadow-none rounded-0" placeholder="Search post..." aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              {search(posts).length < 1 ? (
                <div className="col-12 text-center">
                  <Image
                    className="img-fluid"
                    src="/assets/img/not-found-light.png"
                    width={350}
                    height={250}
                    alt="Not Found"
                  />
                  <p className="code text-dark text-center mb-3">
                    No post found. Try to use another keywords
                    <span className="blink">_</span>
                  </p>
                </div>
              ) : search(posts).map((post, index) => (
                <div className="col-md-6 col-xl-4 p-3" key={index}>
                  <Link className="link" href={`/blogs/${post.slug}`}>
                    <CardBlog
                      thumbnail={post.frontmatter.cover_image}
                      title={post.frontmatter.title}
                      createdAt={post.frontmatter.created_at}
                      description={post.frontmatter.excerpt}
                      slug={post.slug}
                      readingTime={readingTime(post.content)}
                    />
                  </Link>
                </div>
              )).slice(0, limit)}
              {search(posts).length > limit ? (
                <div className="text-center my-3">
                  <button
                    type="button"
                    onClick={() => setLimit(limit + 6)}
                    className="btn btn-outline-dark rounded-pill py-2 px-4"
                  >
                    Load more
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blogs;
