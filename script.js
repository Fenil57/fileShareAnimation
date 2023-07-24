// const showBtn = document.getElementById('showBtn');
// const imageContainer = document.getElementById('imageContainer');
// const images = imageContainer.getElementsByTagName('img');

// showBtn.addEventListener('click', () => {
//     let delay = 0;
//     for (let i = 0; i < images.length; i++) {
//       const image = images[i];
//       image.style.transitionDelay = delay + 's';
//       image.style.transform = 'scale(1)';
//       delay += 0.5; // Adjust the delay time between images
//     }
//   });

// const showBtn = document.getElementById('showBtn');
// const imageContainer = document.getElementById('imageContainer');
// const images = Array.from(imageContainer.getElementsByTagName('img'));

// showBtn.addEventListener('click', () => {
//   let delay = 0;
// //   imageContainer.style.transform = 'translateY(50px)';
//   for (let i = images.length - 1; i >= 0; i--) {
//     const image = images[i];
//     image.style.transitionDelay = delay + 's';
//     image.style.transform = 'scale(1)';
//     delay += 0.1; // Adjust the delay time between images
//   }
// });

const showBtn = document.getElementById('showBtn');
const imageContainer = document.getElementById('imageContainer');
const images = document.querySelectorAll('#imageContainer img');

showBtn.addEventListener('click', () => {
  imageContainer.style.transform = 'translateY(0)';
  
  setTimeout(() => {
    let delay = 0;
    for (let i = images.length - 1; i >= 0; i--) {
      const image = images[i];
      image.style.transitionDelay = delay + 's';
      image.style.transform = 'scale(1)';
      delay += 0.2; 
    }
  }, 500);
});

