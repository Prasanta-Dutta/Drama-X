import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_GPT_API_KEY,
    dangerouslyAllowBrowser: true,
});

export default openai;

// const completion = await client.chat.completions.create({
//     model: 'gpt-5.2',
//     messages: [
//         { role: 'developer', content: 'Talk like a pirate.' },
//         { role: 'user', content: 'Are semicolons optional in JavaScript?' },
//     ],
// });

// console.log(completion.choices[0].message.content);