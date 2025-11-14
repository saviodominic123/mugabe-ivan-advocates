require('dotenv').config();
const readline = require('readline');
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Setup interactive prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Legal AI Assistant (type 'exit' to quit)");

// Keep track of conversation
const conversation = [
  { role: "system", content: "You are a legal assistant helping with Ugandan law. Answer clearly and politely." }
];

// Function to ask the AI
async function askAI(question) {
  try {
    // Add user's message to conversation
    conversation.push({ role: "user", content: question });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: conversation
    });

    const answer = response.choices[0].message.content;
    console.log("\nAI:", answer, "\n");

    // Add AI's reply to conversation
    conversation.push({ role: "assistant", content: answer });

  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Ask user repeatedly
function promptUser() {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log("Goodbye!");
      rl.close();
      return;
    }
    await askAI(input);
    promptUser(); // ask again
  });
}

promptUser();
s