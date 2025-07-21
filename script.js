
// script.js

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userType = document.getElementById("userType").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (!email || !password || !userType) {
    alert("Please fill in all fields");
    return;
  }

  // Save user data (can be used on dashboard pages)
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userType", userType);

  // Redirect based on user type
  switch(userType) {
    case "admin":
      window.location.href = "Admin_index.html";
      break;
    case "farmer":
      window.location.href = "farmer_index.html";
      break;
    case "seller":
      window.location.href = "seller_dashboard.html";
      break;
    case "Buyer":
      window.location.href = "buyer_dashboard.html";
      break;
    default:
      alert("Invalid user type selected");
  }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function() {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

// Dashboard actions (for farmer dashboard)
function displayContent(html) {
  document.getElementById("dashboardContent").innerHTML = html;

  const form = document.getElementById("productForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Product saved successfully!");
    });
  }
}

// Only run these if we're on the farmer dashboard
if (document.getElementById("viewPrice")) {
  document.getElementById("viewPrice").addEventListener("click", () => {
    displayContent("📈 <strong>Market Prices:</strong><br>- Wheat: $5/kg<br>- Rice: $4/kg<br>- Corn: $3/kg");
  });

  document.getElementById("productList").addEventListener("click", () => {
    displayContent("🛒 <strong>Your Products:</strong><br>- Wheat (100kg)<br>- Rice (50kg)<br>- Corn (75kg)");
  });

  document.getElementById("manageProduct").addEventListener("click", () => {
    displayContent(`
      <strong>✏️ Add/Edit Product:</strong>
      <form id="productForm">
        <label>Product Name:</label><br>
        <input type="text" name="productName" required><br><br>
        <label>Quantity (kg):</label><br>
        <input type="number" name="quantity" required><br><br>
        <label>Price per kg:</label><br>
        <input type="number" name="price" required><br><br>
        <button type="submit">Save</button>
      </form>
    `);
  });

  document.getElementById("weatherNews").addEventListener("click", () => {
    displayContent("🌦️ <strong>Weather Forecast:</strong><br>- Today: Sunny, 32°C<br>- Tomorrow: Rainy, 25°C");
  });
}

// Handle logout for all dashboards
if (document.getElementById("logoutBtn")) {
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userType");
    window.location.href = "index.html";
  });
}