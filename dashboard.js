document.getElementById('viewPrice').addEventListener('click', () => {
    displayContent('📈 <strong>Market Prices:</strong><br> - Wheat: $5/kg<br> - Rice: $4/kg<br> - Corn: $3/kg');
});

document.getElementById('productList').addEventListener('click', () => {
    displayContent('<strong>🛒 Your Products:</strong><br> - Wheat (100kg)<br> - Rice (50kg)<br> - Corn (75kg)');
});

document.getElementById('manageProduct').addEventListener('click', () => {
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

document.getElementById('weatherNews').addEventListener('click', () => {
    displayContent('🌦️ <strong>Weather Forecast:</strong><br> - Today: Sunny, 32°C<br> - Tomorrow: Rainy, 25°C');
});

function displayContent(html) {
    document.getElementById('dashboardContent').innerHTML = html;

    const form = document.getElementById('productForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Product saved successfully!');
        });
    }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});
