const productList = {
  products: [
    {
      title: 'A pillow',
      imageUrl:
        'https://bedzzzexpress.com/uploads/products/Hero_Awakens_Adapt_ProLo-Cooling_Pillow_3965_5x7_7_17_2018_1_33_23_PM.jpg',
      price: 19.99,
      description: 'A soft pillow!',
    },
    {
      title: 'A carpet',
      imageUrl:
        'https://www.eymockup.com/wp-content/uploads/2020/11/Home-Carpet-Design-Mockup-3-1500x1500.jpg',
      price: 89.99,
      description: 'A delightful carpet!',
    },
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
