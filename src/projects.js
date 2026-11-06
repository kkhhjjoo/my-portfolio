'use strict';

//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project__item');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if (filter == null) {
        return;
    }

    handleActiveSelection(event.target);
    filterProjects(filter);
});

function handleActiveSelection(target) {
    
    //active메뉴를 재설정
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

function filterProjects(filter) {
    //프로젝트 필터링
    // console.log(filter);
    projectsContainer.classList.add('anim-out');
    projects.forEach(project => {
        console.log(project.dataset.type);

        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    setTimeout(()=> {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}