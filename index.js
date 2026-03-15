// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('navMenu');
// const bar1 = document.getElementById('bar1');
// const bar2 = document.getElementById('bar2');
// const bar3 = document.getElementById('bar3');

// let isOpen = false;

// hamburger.addEventListener ('click' , () => {
//   isOpen = !isOpen;
//   //toggle menu visibilty
//   navMenu.classlist.toggle('hidden' , !isOpen);
//   navMenu.classlist.toggle('flex' , !isOpen);
//   //animte bars into x
//   bar1.classlist.toggle('rotate-45' , isOpen);
//   bar1.classlist.toggle('translate-y-2' , isOpen);

//   bar2.classlist.toggle('opacity-0' , isOpen);

//   bar3.classlist.toggle('-rotate-45' , isOpen);
//   bar3.classlist.toggle('-translate-y-2' , isOpen);
// });
// //close menu when a link is clicked
// navMenu.querySelectorAll('a').forEach(link =>{
//   link.addEventListener('click' , () =>{ isOpen=false;
//     navMenu.classList.add('hidden');
//     navMenu.classList.add('flex');

//     bar1.classList.remove('rotate-45', 'translate-y-2');

//     bar2.classList.remove('opacity-0');

//     bar3.classList.remove('-rotate-45', '-translate-y-2');

//   });
// });