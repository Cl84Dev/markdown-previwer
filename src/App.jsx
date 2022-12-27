import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {
  const initialInput = "# Welcome! This is my Markdown Previwer!\n## A React JS Based Application\nI used **React Markdown**. This is the import: `import { ReactMarkdown } from 'react-markdown/lib/react-markdown';`, and this is the component code itself:\n```\n<div className='p-2' id='preview'>\n\t<ReactMarkdown children={input} remarkPlugins={[remarkGfm]}/>\n</div>\n```\nThese are some my other projects:\n1. Rock-Paper-Scissors Game\n1. Compound Interest Calculator\n1. A Simple JS Based Calculator\n\nCheck out my portfolio on [GitHub](cl84dev.github.io/my-portfolio/).\n> Let's a go!!! - Mario Bros\n![Mario Bros](https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_400/ncom/pt_BR/games/switch/n/new-super-mario-bros-u-deluxe-switch/description-image)\nOk, it was aleatory. But it was required to accomplish this project."

  const [input, setInput] = useState(initialInput)

  function handleChange(e) {
    setInput(e.target.value)
  }

  window.getSelection().toString()

  document.body.style.backgroundColor = '#87B5B5'

  return (
    <div className='container d-flex flex-column align-items-center'>

      <div className='editor d-flex flex-column align-items-center my-3 border border-dark shadow-lg'>

        <div className='top-bar d-flex justify-content-start align-items-center border-bottom border-dark'>

          <div className='mx-3 fs-5 fw-bold'><i className="bi bi-file-code"></i> Editor</div>

        </div>

        <textarea id='editor' onChange={handleChange} value={input} ></textarea>
      </div>
      
      <div className='previwer d-flex flex-column align-items-center my-3 border border-dark shadow-lg'>

        <div className='top-bar d-flex justify-content-start align-items-center border-bottom border-dark'>

          <div className='mx-3 fs-5 fw-bold'><i className='bi bi-file-code'></i> Previwer</div>

        </div>

        <div className='p-2' id='preview'>
          <ReactMarkdown children={input} remarkPlugins={[remarkGfm]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
