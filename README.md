# Domini App Kit v0.1

Domini App Kit is an embeddable AI app builder playground. Developers can seamlessly integrate it to empower users of all skill levels:
1. Showcase APIs in Action
Let users try out your services hands-on. They can build small apps to see how things work, without breaking anything.

2. Customizable Productivity Hubs
Empower power users to tailor their workspace. Prompt an app to automate repetitive tasks to fit their unique needs.

3. Accelerate Prototyping
Teams can try out new ideas right away. No need to wait for developers to build everything first.

4. Free from Vendor Lock-In
Maintain full control over your AI stack. Integrate any AI inference service like Hyperbolic, or custom models without platform restrictions.

## 🚀 Quick Start

### 1. Import Required Files
Use the prebuilt version that comes in the `domini-play` folder:
```js
import renderDomini from './domini-play'
import './domini-play/style.css'
```
You can find these files in the `domini-play` folder of this project.

### 2. Add Monaco Editor
Add the Monaco Editor loader to your HTML file:
```html
<script src="https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs/loader.js"></script>
```

### 3. Initialize Domini
```js
renderDomini(dominiContainer, {
  provider_base_url: "https://api.hyperbolic.xyz/v1",
  provider_api_key: "your-api-key",
  domini_coder_model: "Qwen/Qwen2.5-Coder-32B-Instruct",
  domini_vision_model: "Qwen/Qwen2-VL-72B-Instruct",

  // Optional configurations
  domini_prompt_persona: prompts.PROMPT_PERSONA,    // System prompt
  domini_prompt_request: prompts.PROMPT_REQUEST,    // Initial user prompt
  domini_prompt_describe: prompts.PROMPT_DESCRIBE,  // Image description prompt
  domini_prompt_improve: prompts.PROMPT_IMPROVE,    // Improvement chat prompt
})
```

## 📋 Required Files
Ensure these files are available in your public or build directory:
- `api_docs.xml`
- `esbuild.wasm`
- `mascot.png`

## 🔧 Customization
- Change how Domini works by editing `prompts.js`
- Add guide and examples in `api_docs.xml` to help Domini understand your tools better
