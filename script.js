window.onload = () => {

    moveToActiveSection();

    
}

const moveToActiveSection = () => {
    document.querySelector('.navigation').addEventListener('click', (e) => {
        // console.log(e.target.classList);
        if (e.target.classList.contains('nav')) {
            let clickedTag = e.target;
            removeSelectedTags();
        }
    });
    // console.log(element);
    // element.forEach(el => {
    //     el.addEventListener('click');
    // });
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.navigation .nav');
    console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('active');
    });
}