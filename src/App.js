import './App.css';

import Editor from './components/Editor';

function App() {
  return (
    <div className="app">
      <div className="editor-container">
        <Editor />
      </div>
      <div className="previewer-container">Preview</div>
    </div>
  );
}

export default App;
