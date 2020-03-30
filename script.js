window.onload = () => {
    let flag = true;
    // Header
    moveToActiveSection();
    // Main
    turnScreen();
    slideMainDisplay();
    // Portfolio
    shufflePortfolioImg();
    // Form
    sendForm();
    // Menu-btn
    showMenuBtn(flag);
}

// ############################# header ############################################

const moveToActiveSection = () => {
    let nav = document.querySelector('nav');
    let navigation = document.querySelector('.navigation');
    let li =  document.querySelector('.nav');
    let btn = document.querySelector('.menu-btn');
    let header = document.querySelector('header');
    let logo = document.querySelector('.logo');
    document.querySelector('.navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('nav')) {
            let clickedTag = e.target;
            const y = document.querySelector(`.${clickedTag.text}`).getBoundingClientRect().top + window.pageYOffset - header.scrollHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
            removeSelectedTags('.nav', 'nav_active');
            selectCleckedTag(clickedTag, 'nav_active');
            nav.style = '';
            navigation.style = '';
            li.style = '';
            btn.style = '';
            logo.style = '';
            showMenuBtn(true);
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
        slid.firstElementChild.addEventListener('click', () => {
            event.target.nextElementSibling.style.opacity = event.target.nextElementSibling.style.opacity == 1 ? 0 : 1;
        });
    })
}

const slideMainDisplay = () => {
    const slides = Array.from(document.querySelectorAll('.slider_container__phone'));
    const left = document.querySelector('.slider__next');
    const right = document.querySelector('.slider__prev');
    const sliderContainer = document.querySelector('.slider_container');
    let step;
    let currentSlide = 0;
    let position = 0;
    left.addEventListener('click', () => {
        currentSlide = slideTransform('left', currentSlide, slides);
    })
    right.addEventListener('click', () => {
        currentSlide = slideTransform('right', currentSlide, slides);
    })
    const slideTransform = (direction, currentSlide, slides) => {
        step = sliderContainer.offsetWidth;
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
        }
    });
}

// ######################################### Form (Get a Quote) #######################################

const sendForm = () => {

    document.querySelector('.contact_information form').onsubmit = function() {

        let contactForm = document.querySelector('.contact');
        let inputSubject = document.querySelector('.contact #contact_subject');
        let inputDetail = document.querySelector('.contact #contact_detail');
        let subjectText = inputSubject.value === 'Singolo' ? 'Тема: Singolo' : 'Без темы';
        let detailText = inputDetail.value === 'Portfolio project' ? 'Описание: Portfolio project' : 'Без описания';
        let modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `<div id='modal_message'>
                            <p>Письмо отправлено</p><p>${subjectText}</p>
                            <p>${detailText}</p>
                            <button id='modal_btn'>OK</button>
                            </div>`;
        document.body.insertBefore(modal, contactForm);
        document.body.style.overflow = 'hidden';
        document.getElementById('modal_btn').addEventListener('click', () => {
            modal.remove();
            document.body.removeAttribute('style');
        })
        return false;
    }
}

// ######################################### menu-btn #######################################

const showMenuBtn = (flag) => {
    let nav = document.querySelector('nav');
    let navigation = document.querySelector('.navigation');
    let li =  document.querySelectorAll('.navigation li');
    let btn = document.querySelector('.menu-btn');
    let logo = document.querySelector('.logo');
    btn.addEventListener('click', (e) => {
        if (flag) {
            btn.style = 'transform: rotate(90deg);';
            nav.style = `display: flex; width: 278px; height: ${document.documentElement.clientHeight}px;margin: 0;position: fixed;background: #2D303A;`
            navigation.style = 'width: 100px;height: 260px;justify-content: space-around;flex-direction: column;margin: auto;'
            logo.style = 'z-index: 1002; margin: 2px 0 0 71px;'
            li.forEach (li => {
                li.style = 'list-style-type: none;';
            })
            flag = false;
        } else {
            nav.style = '';
            navigation.style = '';
            li.style = '';
            btn.style = '';
            logo.style = '';
            flag = true;
        }
    })
}