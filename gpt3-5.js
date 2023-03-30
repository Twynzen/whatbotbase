const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();
configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY
  });
openai = new OpenAIApi(configuration);

// Coloca tu API key de OpenAI aquí

async function gptTurboEngine(prompt) {

  const completPromt = prompt;

  const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: 'user',
          content: completPromt
        }
      ]
    })
  const resIA = response.data.choices[0].message.content;
  return resIA;
}

module.exports = {
  gptTurboEngine,
};
