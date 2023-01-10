require('dotenv').config();

const {Client , GatewayIntentBits }= require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.GUILDS, GatewayIntentBits.GUILD_MESSAGES, GatewayIntentBits.MessageContent] });
const express = require('express');
const { Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    organization : process.env.OPEN_AI_ORG,
    apiKey : process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message =>{
    try {
        // dont respond to bot messages
        if (message.author.bot) return;
        const gptResponse = await openai.createCompletion({
            model: 'davinci',
            prompt: message.content,
            maxTokens: 100,
            temperature: 0.9,
            topP: 1,
            stop: ["ChatGpt", "Chiso"]
        });
        message.reply(`${gptResponse.data.choices[0].text}`);
      
        console.log(message.content);
        return;
    }
    catch (error) {
        console.log(error);
    }

}); 

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    } else if (msg.content.startsWith('!openai')) {
        const input = msg.content.split(' ').slice(1).join(' ');

        openai.completions
            .create({
                engine: "text-davinci-002",
                prompt: input,
                max_tokens: 100
            })
            .then(response => {
                const output = response.choices[0].text;
                msg.reply(output);
            })
            .catch(console.error);
    }
});



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
