$('.favoritesbtn').click(function() {
  var storedbar = JSON.parse(localStorage.getItem('storedBar'));
  var favArray = [];
  favArray.push(storedbar.id, storedbar.barname, storedbar.address, storedbar.description, storedbar.image);
  localStorage.setItem('favorites', JSON.stringify(favArray));
  console.log(localStorage.getItem('favorites'));

});

//viewing favorites

var favBar = JSON.parse(localStorage.getItem('favorites'));
console.log(favBar);

function displayPageContent(object) {
  if (object) {
    $('#bar-info h2').html(object.barname);
    $('#bar-info h5').html(object.address);
    $('#bar-info p').html(object.description);
    $('#bar-info img').html(object.image);
  }
}
displayPageContent(favBar);

//Removing favorites
$('.removebtn').click(function() {
  console.log('delete');
  localStorage.removeItem('favorites');
  console.log(localStorage.getItem('favorites'));
});