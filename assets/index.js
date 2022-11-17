/********************CHANGE BACKGROUND HEADER**********************/
const header = document.querySelector('.header');

function scrollHeader() {
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    };
}
window.addEventListener('scroll', scrollHeader);

/******************************MIXITUP******************************/
let mixerPortfolio = mixitup('.projects-container', {
    selectors: {
        target: '.projects-card'
    },
    animation: {
        duration: 300
    }
});

/***********************LINK ACTIVE PROJECTS*************************/
const linkProjects = document.querySelectorAll('.projects-item');

function activeProjects() {
    linkProjects.forEach(l => l.classList.remove('active-projects'));
    this.classList.add('active-projects');
}

linkProjects.forEach(l => l.addEventListener('click', activeProjects));


/********************SCROLL SECTION ACTIVE LINK**********************/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


/********************LIGHT THEME**********************/
const themeButton = document.getElementById('theme-change-btn');

const lightTheme = 'light-theme';
const iconTheme = 'lni-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'lni-night' : 'lni-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectedIcon === 'lni-night' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-icon', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

/********************SCROLL REVEAL**********************/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    //reset:true
})

sr.reveal('.home-data');
sr.reveal('.home-handle', { delay: 600 });
sr.reveal('..home-social, .home-scroll', { delay: 800, origin: 'bottom' });
