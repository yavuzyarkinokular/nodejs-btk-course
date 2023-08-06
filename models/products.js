const products = [
  {
    id: "12345",
    name: "Samsung s8",
    price: "5500",
    imageUrl: "1.jpeg",
    description: "Samsung firmasının ürettiği amiral  gemisi telefondur. ",
    categroyid: "1",
  },
  {
    id: "12346",
    name: "Samsung s9",
    price: "5750",
    imageUrl: "1.jpeg",
    categroyid: "1",
    description: "Samsung firmasının ürettiği amiral  gemisi telefondur. ",
  },
  {
    id: "12349",
    name: "Samsung s13",
    price: "7000",
    imageUrl: "1.jpeg",
    categroyid: "1",
    description: "Samsung firmasının ürettiği amiral  gemisi telefondur. ",
  },
  {
    id: "12340",
    name: "Samsung s23 ultra",
    price: "13000",
    imageUrl: "1.jpeg",
    categroyid: "1",
    description: "Samsung firmasının ürettiği amiral  gemisi telefondur. ",
  },
  {
    id: "12339",
    name: "Macbook",
    price: "13000",
    imageUrl: "1.jpeg",
    categroyid: "2",
    description: "Samsung firmasının ürettiği amiral  gemisi telefondur. ",
  },
  {
    id: "12337",
    name: "Samsung Bulaşık Makinesi",
    price: "13000",
    imageUrl: "1.jpeg",
    categroyid: "3",
    description: "Samsung firmasının ürettiği amiral  gemisi telefondur. ",
  },
];
module.exports = class Product {
  constructor(name, price, imgUrl, description) {
    this.id = (Math.floor(Math.random() * 99999) + 1).toString();
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
  static getById(id) {
    const product = products.find((i) => i.id == id);
    return product;
  }
  static getProductsByCategoryId(id) {
    return products.filter((i) => i.categroyid === id);
  }
  static Update(product) {
    const index = products.findIndex((i) => i.id == product.id);
    products[index].name = product.name;
    products[index].price = product.price;
    products[index].imageUrl = product.imageUrl;
    products[index].description = product.description;
  }
  static deleteById(id) {
    const index = products.findIndex((i) => i.id == id);
    products.splice(index, 1);
  }
};
