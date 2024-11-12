document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks =
        document.querySelectorAll('.navbar a');
    const sections =
        document.querySelectorAll('.scroll');

    window.addEventListener('scroll', function () {
        const currentPos = window.scrollY;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (currentPos >= sectionTop &&
                currentPos < sectionTop + sectionHeight) {                navbarLinks.forEach(function (navbarLink) {
                    navbarLink.classList.remove('active');
                });

                document.querySelector('.navbar a[href="#'
                    + sectionId + '"]')
                    .classList.add('active');
            }
        });
    });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
let dark = document.getElementById("dark-mode")
