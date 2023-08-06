const products = [
  {
    name: "samsung s8",
    price: "5500",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
  {
    name: "samsung s9",
    price: "5750",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
  {
    name: "samsung s13",
    price: "7000",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
  {
    name: "samsung s23 ultra",
    price: "13000",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
];
module.exports = class Product {
  constructor(name, price, imgUrl, description) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  saveProduct() {
    products.push(this);
  }
  static getAll() {
    return products;
  }
};
