// const codes = [
//   "ArrowUp",
//   "ArrowUp",
//   "ArrowDown",
//   "ArrowDown",
//   "ArrowLeft",
//   "ArrowRight",
//   "ArrowLeft",
//   "ArrowRight",
//   "b",
//   "a"
// ];

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  
  let index = 0;

  window.addEventListener('keydown', checkKeyPress, false);
  
  function checkKeyPress(e){
    const key = e.key;
    
    if (key === code[index]){
      index++;
      
      if(index === code.length){
        alert("Hurray!");
        index = 0;
      }
      
    } else {
      index = 0;
    }
  }
}