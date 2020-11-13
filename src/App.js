import './App.css';

import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  return (
    <div className="app">
      <div className="editor-container">
        <Editor />
      </div>
      <div className="previewer-container">
        <Previewer />
      </div>
    </div>
  );
}

export default App;
