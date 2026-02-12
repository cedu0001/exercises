/* "mousemove"
window.innerWidth
style.setProperty
clientX
// procentregning: delen/detHele * 100 */


document.addEventListener("mousemove", colorChange);

function colorChange(e) {
  const procent = e.clientX / window.innerWidth; // window.innerwidth bruges til at dividere.
  const color = procent * 100;

  document.body.style.backgroundColor = `hsl(${color}, 100%, 70%)`;
}


