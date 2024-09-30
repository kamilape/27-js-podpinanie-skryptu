let myHeading = document.querySelector('h1');
myHeading.textContent = 'CLICK';

myHeading.onclick = function() {
    alert('Skrypt działa prawidłowo!');
}

console.log(myHeading);