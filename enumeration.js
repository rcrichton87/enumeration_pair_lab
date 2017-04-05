var Enumeration = function() {}

Enumeration.prototype = {

  // find: function(array, searchThing){
  //   var found;
  //   array.forEach(function(arrayThing){
  //     if(arrayThing === searchThing){
  //       found = arrayThing;
  //     }
  //   })
  //   return found;

  find: function (array, inputFunction) {
    var found;
    array.forEach(function(element){
      if (inputFunction(element) === true){
        found = element;
      }
    } );
    return found;
  },

  map: function(array, inputFunction){
    var outputArray = [];
    array.forEach(function(element){
      outputArray.push(inputFunction(element));
    })
    return outputArray;
  },

  filter: function(array, inputFunction) {
    var outputArray = [];
    array.forEach(function(element) {
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
  }
  

}

module.exports = Enumeration;