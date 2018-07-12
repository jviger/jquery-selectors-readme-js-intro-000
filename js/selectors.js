// declare your functions here...
(function( $ ){
   $.fn.myfunction = function() {
      alert('hello world');
      return this;
   }; 
})( jQuery );