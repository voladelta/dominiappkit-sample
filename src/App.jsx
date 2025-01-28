import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import renderDomini from './domini-play'
import * as prompts from './prompts'
import './domini-play/style.css'
import './App.css'

function App() {
  let dominiContainer = useRef()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (dominiContainer.current) {
      renderDomini(dominiContainer.current, {
        provider_base_url: "https://api.hyperbolic.xyz/v1",
        provider_api_key: "eyJhbG...",
        domini_coder_model: "Qwen/Qwen2.5-Coder-32B-Instruct",// "deepseek-ai/DeepSeek-V3"
        domini_vision_model: "Qwen/Qwen2-VL-72B-Instruct",
        domini_prompt_persona: prompts.PROMPT_PERSONA, // system prompt
        domini_prompt_request: prompts.PROMPT_REQUEST, // first user prompt
        domini_prompt_describe: prompts.PROMPT_DESCRIBE, // describe images
        domini_prompt_improve: prompts.PROMPT_IMPROVE, // chat to improve
      })
    }
  }, [])

  return (
    <main>
      <div className='logos'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>
      <div className="card center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='domini-container' ref={dominiContainer} />
    </main>
  )
}

export default App
