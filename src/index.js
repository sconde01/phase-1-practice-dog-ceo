console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded" , function(){
let dogImageContainer = document.getElementById('dog-image-container')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(function(jsonObject){
    let arrOfDogURLs = jsonObject.message
    arrOfDogURLs.forEach(url => {
      dogImageContainer.innerHTML += makeImageTagString(url)
    })
})

})

function makeImageTagString(url){
  return `<img src="${url}"/>`
}