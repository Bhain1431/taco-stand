let _price = 0;

export default class {
  
  constructor(name, price) {
    this.name = name;
    _price = price;
  }
  
  get price() {
    return _price;
  }
}
