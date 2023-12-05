import dynamic from 'next/dynamic';
import Link from 'next/link';
import { readingTime } from '../../../utils';

const CardBlog = dynamic(() => import('../../blogs/CardBlog/CardBlog'), { ssr: false });

const SectionLatestBlogPost = ({ posts }) => (
  <section>
    <div className="container p-4 p-lg-5" data-aos="fade-up">
      <h2 className="section-title">Artikel Terbaru</h2>
      <p className="lead mb-4">Simak tentang apa yang kami kerjakan hanya dalam 5 menit</p>
      <div className="row">
        {posts.map((post, index) => (
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
        )).slice(0, 6)}
      </div>
      {posts.length > 3 && (
      <div className="text-center my-3">
        <Link className="btn btn-outline-dark rounded-pill py-2 px-4" href="/blogs">
          Show all
        </Link>
      </div>
      )}
    </div>
  </section>
);

export default SectionLatestBlogPost;
