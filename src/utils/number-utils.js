const NumberUtils = {

  map(num,min1,max1,min2,max2) {
    let num1 = (num-min1) / (max1-min1)
    let num2 = (num1*(max2-min2)) + min2

    return num2;
  },

  hex2rgb(hex) {
    hex = (hex.substr(0,1)=="#") ? hex.substr(1) : hex;
    return [parseInt(hex.substr(0,2), 16), parseInt(hex.substr(2,2), 16), parseInt(hex.substr(4,2), 16)];
  },

  toRadians(degree) {
    return degree * (Math.PI/180);
  },

  toDegree(radians) {
    return radians * (180/Math.PI);
  },

  generateUUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

};

export default NumberUtils;
