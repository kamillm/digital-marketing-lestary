import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = ({ post, slug }) => {
  const disqusShortname = 'devseiko';
  const disqusConfig = {
    url: `https://www.lestarymedia.com/blogs/${slug}`,
    identifier: slug,
    title: post.title,
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default DisqusComments;
