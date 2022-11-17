const accardion = document.getElementsByClassName('contentBx');

for (i = 0; i<accardion.length; i++) {
  accardion[i].addEventListener('click', function() {
    this.classList.toggle('active')
  })

}