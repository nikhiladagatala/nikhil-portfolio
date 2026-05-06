// Page Loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
    animateSkills();
});

// Typing Animation
const text = "Aspiring Software Developer | Problem Solver | Tech Enthusiast";
let i = 0;
function typing() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

// Skill Bars Animation
function animateSkills() {
    const bars = document.querySelectorAll('.bar span');
    const percentages = ['90%', '85%', '95%', '80%'];
    bars.forEach((bar, index) => {
        bar.style.width = percentages[index];
    });
}

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Chatbot Logic
const chatToggle = document.getElementById('chat-toggle');
const chatbot = document.getElementById('chatbot');
const closeChat = document.getElementById('close-chat');
const sendChat = document.getElementById('send-chat');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

chatToggle.onclick = () => chatbot.style.display = 'flex';
closeChat.onclick = () => chatbot.style.display = 'none';

sendChat.onclick = () => {
    if (chatInput.value.trim() !== "") {
        const userMsg = document.createElement('div');
        userMsg.className = 'user-msg';
        userMsg.textContent = chatInput.value;
        chatBody.appendChild(userMsg);
        
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'bot-msg';
            botMsg.textContent = "Thanks for reaching out! Nikhil will get back to you soon.";
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
        
        chatInput.value = "";
    }
};

// Modal for Certificates
function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = src;
}

// Back to Top Button
const btt = document.getElementById("backToTop");
window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btt.style.display = "block";
    } else {
        btt.style.display = "none";
    }
};
btt.onclick = () => window.scrollTo(0, 0);
