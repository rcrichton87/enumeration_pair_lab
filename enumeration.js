var Enumeration = function() {}

Enumeration.prototype = {

  find: function (array, inputFunction) {
    var found;
    this.ourForEach(array, function(element){
      if (inputFunction(element) === true){
        found = element;
      }
    } );
    return found;
  },

  map: function(array, inputFunction){
    var outputArray = [];
    this.ourForEach(array, function(element){
      outputArray.push(inputFunction(element));
    })
    return outputArray;
  },

  filter: function(array, inputFunction) {
    var outputArray = [];
    this.ourForEach(array, function(element) {
      if (inputFunction(element) === true) {
        outputArray.push(element);
      }
    })
    return outputArray;
  },

  some: function(array, inputFunction){
    var filteredArray;
    filteredArray = this.filter(array, inputFunction);
    return (filteredArray.length > 0);
  },

  every: function(array, inputFunction){
    var filteredArray;
    filteredArray = this.filter(array, inputFunction);
    return (filteredArray.length === array.length);
  },

  reduce: function(array, inputFunction){
    var total = 0;
    this.ourForEach(array, function(element){
      total = inputFunction(total, element);
    })
    return total;
  },

  ourForEach: function(array, inputFunction){
    for(i = 0; i < array.length; i++){
      inputFunction(array[i]);
    }
  }
  

}

module.exports = Enumeration;