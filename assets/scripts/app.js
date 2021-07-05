class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      'A pillow',
      'https://bedzzzexpress.com/uploads/products/Hero_Awakens_Adapt_ProLo-Cooling_Pillow_3965_5x7_7_17_2018_1_33_23_PM.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A carpet',
      'https://www.eymockup.com/wp-content/uploads/2020/11/Home-Carpet-Design-Mockup-3-1500x1500.jpg',
      'A delightful carpet!',
      89.99
    ),
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" >
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h2>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
