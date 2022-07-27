
console.log('in upcount.js');
console.log(document);

// async function upcountClickHandler(event) {
//     event.preventDefault();
  
//     console.log('button clicked for upcount');
//   }
  
//   document.querySelector('.addbutton').addEventListener('click', upcountClickHandler);
//   console.log(document.querySelector('.addbutton'));

async function upcountClickHandler(event) {
    if (event.target.nodeName === 'BUTTON') {
        console.log(event.target.id);
      }                                                                                                                                                           
}
window.addEventListener('click', upcountClickHandler);