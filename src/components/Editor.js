import React, { useState } from 'react';

const Editor = () => {
  const [text, setText] = useState('');

  const handleChangeText = event => setText(event.target.value);

  return (
    <div>
      <h2>Editor</h2>
      <textarea id="editor" value={text} onChange={handleChangeText} />
    </div>
  );
};

export default Editor;
