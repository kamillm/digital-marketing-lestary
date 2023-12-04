import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import Layout from '../../components/global/Layout/Layout';
import DisqusComments from '../../components/blogs/DisqusComments/DisqusComments';
import ButtonShareSocmed from '../../components/blogs/ButtonShareSocmed/ButtonShareSocmed';
import CodeBlock from '../../components/blogs/CodeBlock/CodeBlock';
import { readingTime } from '../../utils';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf-8',
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};

const BlogDetail = ({ frontmatter, slug, content }) => {
  const { resolvedTheme } = useTheme();
  const tags = frontmatter.tags.split(', ');

  return (
    <>
      <Head>
        <title>
          {frontmatter.title}
          {' '}
          - Novan Junaedi
        </title>
        <meta name="title" content={`${frontmatter.title} - Novan Junaedi`} />
        <meta name="description" content={frontmatter.excerpt} />
        <meta name="keywords" content={frontmatter.tags} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://novanjunaedi.com/blogs/${slug}`}
        />
        <meta
          property="og:title"
          content={`${frontmatter.title} -  Novan Junaedi`}
        />
        <meta property="og:description" content={frontmatter.excerpt} />
        <meta property="og:image" content={frontmatter.cover_image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://novanjunaedi.com/blogs/${slug}`}
        />
        <meta
          property="twitter:title"
          content={`${frontmatter.title} - Novan Junaedi`}
        />
        <meta property="twitter:description" content={frontmatter.excerpt} />
        <meta property="twitter:image" content={frontmatter.cover_image} />
      </Head>
      <Layout>
        <section>
          <div className="container p-4 p-lg-5">
            <div className="row justify-content-center mt-5 pt-5">
              <div className="col-lg-8">
                <h1 className={`section-title ${resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}`}>{frontmatter.title}</h1>
                <div className={`text-${resolvedTheme === 'dark' ? 'info' : 'secondary'} mt-3 mb-4`}>
                  <div className="row justify-content-between">
                    <div className="col-auto">
                      <p>
                        <FaRegCalendar className="me-2" />
                        Posted on
                        {' '}
                        {frontmatter.created_at}
                        {' '}
                        by
                        {' '}
                        {frontmatter.author}
                      </p>
                    </div>
                    <div className="col-auto">
                      <p>
                        <FaRegClock className="me-2" />
                        {readingTime(content)}
                        {' '}
                        min read
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  className="img-fluid rounded-4"
                  height={500}
                  width={1000}
                  src={frontmatter.cover_image}
                  alt={frontmatter.title}
                />
                <div className={`text-${resolvedTheme === 'dark' ? 'light' : 'dark'} my-5`}>
                  <ReactMarkdown
                    className="markdown"
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={CodeBlock}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
                <div className="my-5">
                  <span className={`text-${resolvedTheme === 'dark' ? 'light' : 'dark'} me-3`}>Tags</span>
                  <br className="d-md-none" />
                  {tags.map((tag, index) => (
                    <Link className="link" href={`/blogs/tags?query=${tag.replace(/ /g, '+')}`} key={index}>
                      <span className="badge bg-secondary text-capitalize me-2">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="my-3">
                  <span className={`text-${resolvedTheme === 'dark' ? 'light' : 'dark'} me-3`}>Share to</span>
                  <br className="d-md-none" />
                  <ButtonShareSocmed
                    type="facebook"
                    link={`https://novanjunaedi.com/blogs/${slug}`}
                  />
                  <ButtonShareSocmed
                    type="twitter"
                    link={`https://novanjunaedi.com/blogs/${slug}`}
                  />
                  <ButtonShareSocmed
                    type="linkedin"
                    link={`https://novanjunaedi.com/blogs/${slug}`}
                  />
                  <ButtonShareSocmed
                    type="whatsapp"
                    link={`https://novanjunaedi.com/blogs/${slug}`}
                  />
                  <ButtonShareSocmed
                    type="telegram"
                    link={`https://novanjunaedi.com/blogs/${slug}`}
                  />
                </div>
                <div className="my-5">
                  <DisqusComments post={frontmatter} slug={slug} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogDetail;