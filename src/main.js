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
