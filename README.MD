# Discord Bot using OpenAI and Express

This script creates a Discord bot that uses OpenAI's AI to generate responses to user input. It also creates a simple express server to receive request and interact with discord.

## Requirements

- Node.js
- A Discord bot account and token
- An OpenAI API key
- Express
- dotenv

## Setup

1. Install the dependencies:

```
npm install discord.js openai express dotenv
```

2. Create a `.env` file in the root of your project, and add the following lines with your actual tokens:

```
DISCORD_TOKEN=your-discord-token
OPENAI_TOKEN=your-openai-token
```

3. Edit the `index.js` file and fill in your OpenAI API key and Discord bot token in the appropriate places.

4. Start the script:

   ```
   node index.js
   ```

The script will start the Discord bot and the express server and log a message to the console when it's ready.

## Usage

- The bot listens to message starting with "!openai" and generates response using OpenAI's AI based on input
- it also reply to "ping" with "pong"
- Additionally express listens on port 3000 for any request

You can customize the script according to your needs, such as modifying the prompt and max_tokens to adjust the output, handling more messages etc.

I hope you find this script useful and have fun creating your own Discord bot with OpenAI and Express! Let me know if you have any questions.
