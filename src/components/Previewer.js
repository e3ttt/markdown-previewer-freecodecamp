import React from 'react';
import { useSelector } from 'react-redux';
import marked from 'marked';

const Previewer = () => {
  const text = useSelector(state => state);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div>
      <h2 id="preview-title">Previewer</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }} />
    </div>
  );
};

export default Previewer;
