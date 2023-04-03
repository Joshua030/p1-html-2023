function toggleColor() {
  var element = document.querySelectorAll('.bark-text');
  console.log(element);
  if (element[0].classList.contains('active')) {
    element[0].classList.remove('active');
    element[1].classList.remove('active');
  } else {
    element[0].classList.add('active');
    element[1].classList.add('active');
  }
}
