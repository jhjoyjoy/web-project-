// seller_script.js

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

// Example: Handle product form submission
document.getElementById('product-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this['product-name'].value.trim();
  const price = this['product-price'].value.trim();
  const desc = this['product-description'].value.trim();

  if(name && price && desc){
    alert(`Product saved:\nName: ${name}\nPrice: ${price}\nDescription: ${desc}`);
    this.reset();
  } else {
    alert('Please fill all fields!');
  }
});
