const chatbotMessages = document.getElementById("chatbot-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Event listener for send button click
sendButton.addEventListener("click", sendMessage);

// Event listener for user input enter key press
userInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

// Function to send user message and receive chatbot response
function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() === "") {
    return;
  }

  appendMessage1(userMessage);
  // Call a function or API to process the user message and get the chatbot response
  const chatbotResponse = getChatbotResponse(userMessage);
  appendMessage2(chatbotResponse);

  userInput.value = "";
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to append message to the chatbot messages area
function appendMessage1(message) {
    sender = "user";
  const messageElement1 = document.createElement("div");
  messageElement1.style.color="#05106C";
  messageElement1.classList.add("message", sender);
  messageElement1.textContent = message;
  chatbotMessages.appendChild(messageElement1);
}
function appendMessage2(message) {
    sender = "chatbot";
    const messageElement2 = document.createElement("div");
    messageElement2.style.color="#0391fd";
    messageElement2.classList.add("message", sender);
    messageElement2.textContent = message;
    chatbotMessages.appendChild(messageElement2);
  }
// Function to simulate chatbot response based on user input
function getChatbotResponse(message) {
  // Here, you can implement your chatbot logic and generate the appropriate response
  // For simplicity, let's just return a predefined response based on the user's message
  if(message.toLowerCase().includes("hi")){
    
    return "Welcome! To the Online Ott Platform, enter ott to view";
    
  }
  else if(message.toLowerCase().includes("good morning")){
    return "Good Morning";
    }
    else if(message.toLowerCase().includes("good afternoon")){
        return "Good afternoon";
        }
        else if(message.toLowerCase().includes("good evening")){
            return "Good evening";
            }
  
  else if (message.toLowerCase().includes("ott")) {
    x = document.getElementById('blg');
    chatbotMessages.appendChild(x);
    x.style.visibility="visible";
   
  } 
  else if(message.toLowerCase().includes("prime")){
    y = document.getElementById('plans1');
    chatbotMessages.appendChild(y);
    y.style.visibility="visible";
  }
  else if(message.toLowerCase().includes("netflix")){
    z = document.getElementById('plans2');
    chatbotMessages.appendChild(z);
    z.style.visibility="visible";
  }
  else if(message.toLowerCase().includes("hotstar")){
    u = document.getElementById('plans3');
    chatbotMessages.appendChild(u);
    u.style.visibility="visible";
  }
  else if(message.toLowerCase().includes("aha")){
    v = document.getElementById('plans4');
    chatbotMessages.appendChild(v);
    v.style.visibility="visible";
  }
  else if(message.toLowerCase().includes("bye")){
    return "Bye! pleasure to meet you sir";
  }
  else {
    return "I'm sorry, I don't understand.";
  }
}

function display1(){
    const userMessage = "Prime";
    if (userMessage.trim() === "") {
      return;
    }
  
    appendMessage1(userMessage);
    // Call a function or API to process the user message and get the chatbot response
    const chatbotResponse = getChatbotResponse(userMessage);
    appendMessage2(chatbotResponse);
  
    userInput.value = "";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function display2(){
    const userMessage = "Netflix";
    if (userMessage.trim() === "") {
      return;
    }
  
    appendMessage1(userMessage);
    // Call a function or API to process the user message and get the chatbot response
    const chatbotResponse = getChatbotResponse(userMessage);
    appendMessage2(chatbotResponse);
  
    userInput.value = "";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function display3(){
    const userMessage = "Hotstar";
    if (userMessage.trim() === "") {
      return;
    }
  
    appendMessage1(userMessage);
    // Call a function or API to process the user message and get the chatbot response
    const chatbotResponse = getChatbotResponse(userMessage);
    appendMessage2(chatbotResponse);
  
    userInput.value = "";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function display4(){
    const userMessage = "Aha";
    if (userMessage.trim() === "") {
      return;
    }
  
    appendMessage1(userMessage);
    // Call a function or API to process the user message and get the chatbot response
    const chatbotResponse = getChatbotResponse(userMessage);
    appendMessage2(chatbotResponse);
  
    userInput.value = "";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }