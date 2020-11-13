import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addText } from '../actions/actions';
import { initialText } from './initialText';

const Editor = () => {
  const [text, setText] = useState(initialText);
  const dispatch = useDispatch();

  const handleChangeText = event => {
    setText(event.target.value);
    dispatch(addText(event.target.value));
  };

  return (
    <div>
      <h2>Editor</h2>
      <textarea id="editor" value={text} onChange={handleChangeText} />
    </div>
  );
};

export default Editor;
