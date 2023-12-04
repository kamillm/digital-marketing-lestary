import { DiscussionEmbed } from 'disqus-react';
import { useTheme } from 'next-themes';

const DisqusComments = ({ post, slug }) => {
  const { theme } = useTheme();

  const disqusShortname = 'devseiko';
  const disqusConfig = {
    url: `https://www.lestarymedia.com/blogs/${slug}`,
    identifier: slug,
    title: post.title,
  };

  return <DiscussionEmbed key={theme} shortname={disqusShortname} config={disqusConfig} />;
};

export default DisqusComments;
