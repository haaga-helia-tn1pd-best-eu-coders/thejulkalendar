$ = function(id) {
  return document.getElementById(id);
}

let show = function(id) {
	$(id).style.display ='block';
}
let hide = function(id) {
	$(id).style.display ='none';
}