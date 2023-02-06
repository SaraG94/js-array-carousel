console.log('Ciao')
//prendere da html arrow
const leftArrow = document.getElementById('left')
console.log(leftArrow)

const rightArrow = document.getElementById('right')
console.log(rightArrow)

//prendere photo da html
const photoCarosello = document.getElementsByClassName('photo')
console.log(photoCarosello)

//ascoltare evento click su arrow

leftArrow.addEventListener('click', function () {
	console.log('ciaooo')

})

rightArrow.addEventListener('click', function () {
	console.log('22ciaooo')

})

// al click aggiungere e rimuovere classe active