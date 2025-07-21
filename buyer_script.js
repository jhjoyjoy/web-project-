// buyer_script.js

// Sample product data
const products = [
  { id: 1, name: 'Apple', category: 'fruits' },
  { id: 2, name: 'Banana', category: 'fruits' },
  { id: 3, name: 'Carrot', category: 'vegetables' },
  { id: 4, name: 'Tomato', category: 'vegetables' },
  { id: 5, name: 'Wheat', category: 'grains' },
  { id: 6, name: 'Rice', category: 'grains' }
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const filterCategory = document.getElementById('filter-category');

// Function to display products based on search and filter
function displayProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = filterCategory.value;

  const filtered = products.filter(p => {
    const matchesName = p.name.toLowerCase().includes(searchTerm);
    const matchesCategory = category ? p.category === category : true;
    return matchesName && matchesCategory;
  });

  productList.innerHTML = filtered.length > 0 
    ? filtered.map(p => `<li>${p.name} (${p.category})</li>`).join('')
    : '<li>No products found</li>';
}

// Event listeners for search and filter
searchInput.addEventListener('input', displayProducts);
filterCategory.addEventListener('change', displayProducts);

// Initial display
displayProducts();

// Smooth scroll for sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
