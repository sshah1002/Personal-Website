const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    //Button click active class, when clicking on buttons to switch sections
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            console.log(currentBtn);
            console.log(this);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Sections active class
    allSections.addEventListener('click', (e) => {
        // dataset is referring to whatever 
        const id = e.target.dataset.id;
        if (id) {
            // remove the selected from the other button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((sections) => {
                sections.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

PageTransitions();


