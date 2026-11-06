//header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //스크롤되는 Y좌표가 headerHeight보다 크다면 다른 스타일링
    console.log(window.scrollY);
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

//홈 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//top화살표 사라졌다가 나오기
const arrow = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if (scrollY > homeHeight/2) {
        arrow.style.opacity = 1
    } else {
        arrow.style.opacity = 0
    }
});


// 프로젝트 모달
const projects = document.querySelector('.projects');
const modal = document.querySelector('.project-modal');
const modalImg = modal.querySelector('.project-modal__img');
const modalTitle = modal.querySelector('.project-modal__title');
const modalDescription = modal.querySelector('.project-modal__description');
const modalClose = modal.querySelector('.project-modal__close');

// 프로젝트 클릭 → 클릭한 항목의 내용을 모달에 복사해서 열기
projects.addEventListener('click', (event) => {
    if (event.target.closest('a')) return; // GitHub 아이콘은 원래대로 새 탭에서 열기

    const item = event.target.closest('.project__item');
    if (!item) return;

    const img = item.querySelector('.project__img');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.textContent = item.querySelector('.project__metadata__title').textContent;
    modalDescription.textContent = item.querySelector('.project__metadata p').textContent;

    modal.showModal();
});

// X 버튼으로 닫기
modalClose.addEventListener('click', () => modal.close());

// 바깥 어두운 영역 클릭으로 닫기
modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
});
