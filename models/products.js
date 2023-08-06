const products = [
  {
    id: "12345",
    name: "samsung s8",
    price: "5500",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
  {
    id: "12346",
    name: "samsung s9",
    price: "5750",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
  {
    id: "12349",
    name: "samsung s13",
    price: "7000",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
  {
    id: "12340",
    name: "samsung s23 ultra",
    price: "13000",
    imageUrl: "1.jpeg",
    description: "Kıyak telefon",
  },
];
module.exports = class Product {
  constructor(name, price, imgUrl, description) {
    this.id = Math.floor(Math.random() * 99999) + 1;
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
