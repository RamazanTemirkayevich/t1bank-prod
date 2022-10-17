
const menuBtn = document.querySelector('.header__burger'),
    menu = document.querySelector('.nav__wrap'),
    head = document.querySelector('.header');

    menuBtn.onclick = function() {
        menu.classList.toggle('active'),
        head.classList.toggle('active');
    };

const vbtn = document.querySelector('.video__box-btn');

    vbtn.onclick = function() {
        vbtn.style.display = 'none';
    };

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
