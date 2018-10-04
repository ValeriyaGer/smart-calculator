class SmartCalculator {
  constructor(initialValue) {

    this._value = initialValue;
    this._arr = [];
    this._arr[0] = initialValue;

  }

  add(number) {

    this._arr.length = 0;
    this._arr[0] = this._value;  
    this._arr[1] = '+';
    this._arr[2] = number; 
    this._value = this._value + number;

    return this;
  }
  
  subtract(number) {

    this._arr.length = 0;
    this._arr[0] = this._value;  
    this._arr[1] = '-';
    this._arr[2] = number; 
    this._value = this._value - number;

    return this;
  }

  multiply(number) {
    var variable;

    this._arr[this._arr.length] = '*';
    this._arr[this._arr.length] = number;
    if ((this._arr[1] == '+')||(this._arr[1] == '-')) {
      variable = this._arr[2];
    }
    else {
      variable = this._arr[0];
    }
   
    for (let i = 0; i < this._arr.length; i = i + 2) {
      if (this._arr[i+1] === '*') {
        variable = variable*this._arr[i+2];
      } 
      if (this._arr[i+1] === '/') {
        variable = variable/this._arr[i+2];
      }
    }
      
    this._value = variable;
      
    if (this._arr[1] === '+') {
      this._value = this._arr[0] + variable;   
    } 
    if (this._arr[1] === '-') {
      this._value = this._arr[0] - variable;  
    }
      
    return this;
  }

  devide(number) {
    var variable;

    this._arr[this._arr.length] = '/';
    this._arr[this._arr.length] = number;
    if ((this._arr[1] == '+')||(this._arr[1] == '-')) {
      variable = this._arr[2];
    }
    else {
      variable = this._arr[0];
    }
   
    for (let i = 0; i < this._arr.length; i = i + 2) {
      if (this._arr[i+1] === '*') {
        variable = variable*this._arr[i+2];
      } 
      if (this._arr[i+1] === '/') {
        variable = variable/this._arr[i+2];
      }
    }
      
    this._value = variable;
      
    if (this._arr[1] === '+') {
      this._value = this._arr[0] + variable;   
    } 
    if (this._arr[1] === '-') {
      this._value = this._arr[0] - variable;  
    }
      
    return this;
  }

  pow(number) {
    var variable;

    if (number === 1) {
      this._arr[this._arr.length] = '*';
      this._arr[this._arr.length] = 1;
    } else {
    this._arr[this._arr.length - 1] = Math.pow(this._arr[this._arr.length - 1], number);
    this._value = this._arr[this._arr.length - 1];
    }
      
    if ((this._arr[1] == '+')||(this._arr[1] == '-')) {
      variable = this._arr[2];
    }
    else {
      variable = this._arr[0];
    }
    
    for (let i = 0; i < this._arr.length; i = i + 2) {
      if (this._arr[i+1] === '*') {
        variable = variable*this._arr[i+2];
      } 
      if (this._arr[i+1] === '/') {
        variable = variable/this._arr[i+2];
      }
    }
      
    this._value = variable;

      
    if (this._arr[1] === '+') {
      this._value = this._arr[0] + variable;   
    } 
    if (this._arr[1] === '-') {
      this._value = this._arr[0] - variable;  
    }

    return this;
  }
}

SmartCalculator.prototype.toString = function() {
  return this._value;
}            

SmartCalculator.prototype.valueOf = function(){
  return this._value;
}

module.exports = SmartCalculator;
