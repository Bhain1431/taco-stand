const subtract = (x = 0, y = 0, callback) => {
  return callback(null, x - y);
};

const divide = (x = 0, y = 1, callback) => {
  if (y === 0) return callback(`Can't divide by 0`);
  return callback(null, x / y);
};


//const hello = (message) => message;

export default {
  
  add(x = 0, y = 0, callback) {
    return callback(null, x + y);
  },
  
  subtract,
  
  divide,
  
  multiply(x = 0, y = 0, callback) {
    return callback(null, x * y);
  }
  
}


export const CalculatorBetter = {
  
  add(x = 0, y = 0){
    const result = x + y;
    return Promise.resolve(result);
  },
  
  subtract(x = 0, y = 0){
    return new Promise((resolve, reject) => {
      return subtract(x, y, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  },
  
  /**
   * Performs a division operation
   *
   * @param {number} x - the first value
   * @param {number} y - the second value
   *
   * @returns {Promise<number>}
   */
  divide(x = 0, y = 0){
    return new Promise((resolve, reject) => {
      return divide(x, y, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  },
  
  multiply(x = 0, y = 0){
    const result = x * y;
    return Promise.resolve(result);
  },
  
};


export const UberCalculator = {
  
  async add(x = 0, y = 0) {
    const result = await CalculatorBetter.add(x, y);
    return result;
  }
  
};
