
//prendere da html arrow
const leftArrow = document.getElementById('left')
console.log(leftArrow)

const rightArrow = document.getElementById('right')
console.log(rightArrow)

//prendere photo da html
const photoCarosello = document.getElementsByClassName('photo')
console.log(photoCarosello)

//indicephoto
let indicePhotoAttiva = 0

//ascoltare evento click su arrow

rightArrow.addEventListener('click', function () {
	console.log('22ciaooo')
    // al click aggiungere e rimuovere classe active

    if(indicePhotoAttiva<(photoCarosello.length-1)){
        let photoCorrente = photoCarosello[indicePhotoAttiva]
        // rimuovere classe active
        photoCorrente.classList.remove('active')

        // aumentare l'indice
        indicePhotoAttiva += 1

        let prossimaPhoto = photoCarosello[indicePhotoAttiva]
        // aggiungere classe active
        prossimaPhoto.classList.add('active')

    } 
})


leftArrow.addEventListener('click', function () {
	console.log('ciaooo')

    
    if(indicePhotoAttiva>0){
        let photoCorrente = photoCarosello[indicePhotoAttiva]
        // rimuovere classe active
        photoCorrente.classList.remove('active')

        // decrementare l'indice
        indicePhotoAttiva -= 1

        let previousPhoto = photoCarosello[indicePhotoAttiva]
        // aggiungere classe active
        previousPhoto.classList.add('active')

    }
})

