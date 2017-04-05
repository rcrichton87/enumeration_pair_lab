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
  }
  

}

module.exports = Enumeration;