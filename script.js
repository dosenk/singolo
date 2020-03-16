window.onload = () => {
    // header
    moveToActiveSection();
    // main
    turnScreen();
    slideMainDisplay();
    
    
}
// ############################# header ############################################
const moveToActiveSection = () => {
    document.querySelector('.navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('nav')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectCleckedTag(clickedTag);
        }
    });
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.navigation .nav');
    tags.forEach(tag => {
        tag.classList.remove('active');
    });
}

const selectCleckedTag = (clicedTag) => {
    clicedTag.classList.add('active');
}

// ############################### main ###############################################

const turnScreen = () => {
    let slider = document.querySelectorAll('.slider__images_display');
    slider.forEach(slid => {
        slid.firstElementChild.addEventListener('click', 
        () => event.toElement.nextElementSibling.style.opacity = event.toElement.nextElementSibling.style.opacity == 1 ? 0 : 1);
    })
}

const slideMainDisplay = () => {
    const slides = Array.from(document.querySelectorAll('.slider_container__phone'));
    const left = document.querySelector('.slider__next');
    const right = document.querySelector('.slider__prev');
    const sliderContainer = document.querySelector('.slider_container');
    let step = sliderContainer.offsetWidth;
    let currentSlide = 0;
    let position = 0;
    left.addEventListener('click', () => {
        currentSlide = slideTransform('left', currentSlide, slides);
    })
    right.addEventListener('click', () => {
    currentSlide = slideTransform('right', currentSlide, slides);
    })
    const slideTransform = (direction, currentSlide, slides) => {    
        if (direction === 'left') {
          position--;
          if (currentSlide - 1 < 0) currentSlide = slides.length - 1;
          else currentSlide = currentSlide - 1;
          slides[currentSlide].style.transform = `translateX(${(-position)* step - currentSlide * step}px)`
          sliderContainer.style.transform = `translateX(${position * step}px)`
    
        }
        if (direction === 'right') {
          position++;
          if (currentSlide + 1 > slides.length - 1) currentSlide = 0;
          else currentSlide = currentSlide + 1;
          slides[currentSlide].style.transform = `translateX(${(-position)* step - currentSlide * step}px)`
          sliderContainer.style.transform = `translateX(${position * step}px)`;
        }
        return currentSlide;
      }
}