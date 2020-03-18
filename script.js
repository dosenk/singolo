window.onload = () => {
    // let step = 0;
    moveToActiveSection();
    // main
    turnScreen();
    slideMainDisplay();
    // Portfolio
    shufflePortfolio();


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

const shufflePortfolio = () => {

    document.querySelector('.portfolio__tags').addEventListener('click', (e) => {

        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags('.tag', 'tag_active');
            selectCleckedTag(clickedTag, 'tag_active');
            // shufflePortfolioImg();
            let images = document.querySelectorAll('.portfolio__picture');
            let firstIndex = images[0].src.lastIndexOf('_') + 1;
            let step = images[0].src.slice(firstIndex, -4);
            let form = document.querySelector('.portfolio__pictures');
            images.forEach(img => {
                img.remove();
                step === images.length ? step = 1 : ++step;
                document.createElement('img');
                img.src = `file:///home/dos/app/rs_school/singolo/assets/img/portfolio_${step}.png`
                form.appendChild(img);
            });
        }
    });
}