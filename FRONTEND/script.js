// -------------------------
// Contact Button Alert
// -------------------------
function showMessage() {
    alert("Thanks for visiting! This project is deployed on AWS.");
}

// -------------------------
// Smooth scroll to Project
// -------------------------
function scrollToSection() {
    document.getElementById("project").scrollIntoView({
        behavior: "smooth"
    });
}

// -------------------------
// Fetch Backend API
// -------------------------
function fetchBackend() {
    // Replace this URL with your EC2 public IP after deployment
    const apiUrl = "http://127.0.0.1:5000/project";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const projectSection = document.getElementById("project");

            // Create a new div to display API data
            const apiDiv = document.createElement("div");
            apiDiv.className = "api-data";
            apiDiv.innerHTML = `
                <h3>Backend API Data:</h3>
                <p><strong>Project Name:</strong> ${data.name}</p>
                <p><strong>Components:</strong> ${data.components.join(", ")}</p>
                <p><strong>Author:</strong> ${data.author}</p>
            `;

            projectSection.appendChild(apiDiv);
        })
        .catch(err => {
            console.error("API Error:", err);
            const projectSection = document.getElementById("project");
            const errorDiv = document.createElement("div");
            errorDiv.style.color = "red";
            errorDiv.textContent = "Backend API not available. Make sure Flask server is running!";
            projectSection.appendChild(errorDiv);
        });
}

// -------------------------
// Call API when page loads
// -------------------------
window.addEventListener("load", () => {
    fetchBackend();
});
