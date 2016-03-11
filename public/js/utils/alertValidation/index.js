define('greatModule', function(require, $){
	console.log('testing2');
  // Above we have passed in jQuery
  // They will not be accessible in the global scope
  return {
  	'hello' : 'hello back'
  }
  // What we return here will be used by other modules
});