/* eslint-disable react/jsx-props-no-spreading */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ModalImage from 'react-modal-image';
import { FaCopy } from 'react-icons/fa';
import { copyText } from '../../../utils';

const CodeBlock = {
  a: ({ node, children }) => <a className="link-info" href={node.properties.href}>{children}</a>,
  p: ({ node, children }) => {
    if (node?.children[0]?.tagName === 'img') {
      const image = node.children[0];
      return (
        <ModalImage
          className="img-fluid d-block mx-auto my-4"
          hideDownload
          hideZoom
          small={image.properties.src}
          large={image.properties.src}
          alt={image.properties.alt || 'Image'}
        />
      );
    }
    return <p className="lh-lg">{children}</p>;
  },
  blockquote: ({ children }) => (
    <blockquote className="border-start border-3 border-secondary p-4">
      {children}
    </blockquote>
  ),
  li: ({ children }) => <li className="lh-lg">{children}</li>,
  pre: ({ children, node }) => (
    <pre className="position-relative">
      <button
        type="button"
        className="btn btn-outline-info btn-sm position-absolute top-0 end-0 mt-3 me-2 d-none d-lg-block"
        onClick={() => copyText(node?.children[0].children[0].value)}
      >
        <FaCopy className="mb-1" /> Copy
      </button>
      {children}
    </pre>
  ),
  code({
    node, inline, className, children, ...props
  }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;
