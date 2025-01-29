// AI Question and Answer
const qaData = {
    "What is AI?": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.",
    "What is machine learning?": "Machine learning is a subset of AI that involves the use of algorithms and statistical models to enable computers to improve their performance on a task through experience.",
    "What is natural language processing?": "Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and human (natural) languages, allowing computers to read, understand, and generate human language.",
    "How is AI used in blogging?": "AI can assist in content creation, SEO optimization, personalized recommendations, and automating repetitive tasks, making blogging more efficient."
};

// Open the chatbot window
document.getElementById("openChatbot").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "block";
});

// Close the chatbot window
document.getElementById("closeChatbot").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "none";
});

// Send response to the chatbot
document.getElementById("send-response").addEventListener("click", function() {
    const userQuestion = document.getElementById("user-response").value.trim();
    const answer = qaData[userQuestion] || "Sorry, I don't have an answer for that question.";
    
    const replyDiv = document.getElementById("chatbot-reply");
    replyDiv.innerHTML += `<p><strong>You:</strong> ${userQuestion}</p><p><strong>AI:</strong> ${answer}</p>`;
    
    document.getElementById("user-response").value = ''; // Clear input field
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save user preference in local storage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
});

// Load Dark Mode preference on page load
window.addEventListener("load", function() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// Open & Close Modal Functionality for "Read More" Button
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

// Function to open modal with content
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action

        const article = this.closest(".blog-card"); // Get parent blog-card
        const title = article.querySelector("h3").textContent;
        const description = article.querySelector("p").textContent;

        // Set modal content based on the article's title and description
        modalContent.innerHTML = `<h2>${title}</h2><p>${description}</p><p>More content about this topic will be added here...</p>`;
        
        // Show modal
        modal.style.display = "block";
    });
});

// Close modal when clicking the close button
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
