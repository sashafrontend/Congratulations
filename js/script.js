// Slider img
const sliderArrow = document.querySelector('.slider-arrow');
        slidesArrow = document.querySelectorAll('.slider-arrow__item');
        prev = sliderArrow.querySelector('.slider-arrow--left');
        next = sliderArrow.querySelector('.slider-arrow--right');

        let slideIndex = 0;

        prev.addEventListener('click', () => showSlideArrow(-1));
        next.addEventListener('click', () => showSlideArrow(1));

        function showSlideArrow(n) {
            slideIndex += n;

            if (slideIndex < 0) slideIndex = slidesArrow.length - 1;
            if (slideIndex >= slidesArrow.length) slideIndex = 0;

        slidesArrow.forEach(item => item.style.display = 'none');
        slidesArrow[slideIndex].style.display = 'block';
    }

    showSlideArrow(0);
    
// Burger
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("footer").classList.toggle("open")
    })   
})

// Modal
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-close-modal');

    modalButtons.forEach(function(item){

    item.addEventListener('click', function(e) {

        e.preventDefault();

        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            
        modalElem.classList.add('active');
        overlay.classList.add('active');
    }); 
}); 

    closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
    });
}); 

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
}); 

document.getElementById('form').reset()

// Mobile search
document.getElementById("open-mobile-search").addEventListener("click", function() {
    document.getElementById("mobile-search").classList.add("open")
})


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("mobile-search").classList.remove("open")
    }
});

document.querySelector("#mobile-search .mobile-search__content").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("mobile-search").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
