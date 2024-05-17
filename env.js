// env.js
export function config() {
    const env = {};
    env.OPENAI_API_KEY = 'your_api_key_here'; // APIキーを設定する
    Object.assign(window.env, env);
  }