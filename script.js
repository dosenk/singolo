window.onload = () => {

    moveToActiveSection();

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
        slid.addEventListener('click', () => event.target.style.opacity = event.target.style.opacity == 1 ? 0 : 1);
    })
}

const slideMainDisplay = () => {
    previousSlide();
nextSlide(); 
}


const previousSlide = () => {

}

