import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
// Chat functionality
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", async function () {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Clear input field
  userInput.value = "";

  // Remove placeholder on the first message
  const placeholder = document.querySelector(".placeholder");
  if (placeholder) placeholder.remove();

  // Add user message
  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("message", "user-message");
  userMessageDiv.textContent = userMessage;
  chatContainer.appendChild(userMessageDiv);

  // Add bot response (dummy response)
  const botMessageDiv = document.createElement("div");
  botMessageDiv.classList.add("message", "bot-message");
  botMessageDiv.textContent = await geminiResponse(userMessage);
  chatContainer.appendChild(botMessageDiv);

  // Scroll to the bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
});

const geminiResponse = async (message) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAPRDWjBMiUubTa6zihUcx1nfecvnMHZQA"
  );

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = message;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
};
