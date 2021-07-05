class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h2>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    return prodEl;
  }
}
class ProductList {
  products = [
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
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
