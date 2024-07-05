document.getElementById('send-icon').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const input = document.getElementById('chat-input');
  const messageText = input.value.trim();

  if (messageText === '') return;

  // Create message element
  const message = document.createElement('div');
  message.classList.add('message', 'sent');
  message.innerText = messageText;

  // Append to chat body
  const chatBody = document.getElementById('chat-body');
  chatBody.appendChild(message);

  // Scroll to the bottom
  chatBody.scrollTop = chatBody.scrollHeight;

  // Clear input
  input.value = '';
}

// Scroll chat body to the bottom on load
window.onload = function() {
  const chatBody = document.getElementById('chat-body');
  chatBody.scrollTop = chatBody.scrollHeight;
};

// Placeholder functions for icons
document.getElementById('file-icon').addEventListener('click', function() {
  alert('File icon clicked');
});

document.getElementById('voice-icon').addEventListener('click', function() {
  alert('Voice icon clicked');
});

document.getElementById('image-icon').addEventListener('click', function() {
  alert('Image icon clicked');
});

document.querySelector('.fa-phone').addEventListener('click', function() {
  alert('Phone icon clicked');
});

document.querySelector('.fa-video').addEventListener('click', function() {
  alert('Video icon clicked');
});

// Refresh button functionality
document.getElementById('refresh-icon').addEventListener('click', function() {
  location.reload();
});
