export default class {
  
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  
  get subTotal() {
    return this.product.price * this.quantity;
  }
  
}
