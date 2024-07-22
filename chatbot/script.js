document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    displayMessage(userInput, 'user-message');

    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot-message');
    }, 1000);
}

function displayMessage(message, className) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${className}`;
    messageContainer.innerHTML = `${message} <span class="timestamp">${new Date().toLocaleTimeString()}</span>`;

    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        'hi': 'Hello! How can I help you today?',
        'hello': 'Hi there! What can I do for you?',
        'how are you': 'I am just a bot, but I am here to help you!',
        'bye': 'Goodbye! Have a great day!',
        'what is your name': 'I am a simple chatbot created to assist you.',
        'what can you do': 'I can respond to your messages and provide basic information. Try asking me something!',
        'who is your developer':'Neha Perween has developed me.',
        'who has created you':'Neha Perween has developed me.'

    };

    const lowerCaseInput = input.toLowerCase();
    return responses[lowerCaseInput] || 'I am sorry, I did not understand that.';
}
