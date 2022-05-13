var string = "NOTE: This website is not Completely Developed...Desktop Screen Recommended...";
var str = string.split("");
var el = document.getElementById('Home');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();
