window.onload = () => {
    // let step = 0;
    moveToActiveSection();
    // main
    turnScreen();
    slideMainDisplay();
    // Portfolio
    shufflePortfolioImg();

}

// ############################# header ############################################

const moveToActiveSection = () => {
    document.querySelector('.navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('nav')) {
            let clickedTag = e.target;
            const y = document.querySelector(`.${clickedTag.text}`).getBoundingClientRect().top + window.pageYOffset - 89;
            window.scrollTo({ top: y, behavior: 'smooth' });
            removeSelectedTags('.nav', 'nav_active');
            selectCleckedTag(clickedTag, 'nav_active');
        }
    });
}

const removeSelectedTags = (searchClass, active_class) => {
    let tags = document.querySelectorAll(searchClass);
    tags.forEach(tag => {
        tag.classList.remove(active_class);
        tag.removeAttribute('style');

    });
}

const selectCleckedTag = (clicedTag, active_class) => {
    clicedTag.classList.add(active_class);
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

// ############################################ Portfolio ###########################################

const shufflePortfolioImg = () => {

    document.querySelector('.portfolio').addEventListener('click', (e) => {

        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags('.tag', 'tag_active');
            selectCleckedTag(clickedTag, 'tag_active');
            let images = document.querySelector('.portfolio__pictures');
            let child_nodes = images.children;
            let newNode = child_nodes[0];
            child_nodes[0].remove();
            images.appendChild(newNode);
        } else if (e.target.classList.contains('portfolio__picture')) {
            let clickedTag = e.target;
            removeSelectedTags('.portfolio__picture', 'porfolio__img__active');
            selectCleckedTag(clickedTag, 'porfolio__img__active');
            clickedTag.style.width = '210px';
            clickedTag.style.height = '177px';
        }
    });
}