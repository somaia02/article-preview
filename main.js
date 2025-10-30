const shareBtn = document.querySelector('.share-btn');
const previewFooter = document.querySelector('.preview__footer');


document.querySelector('.share-btn').addEventListener('click', () => {
    shareBtn.classList.toggle('dark-btn-bg');
    previewFooter.classList.toggle('dark-bg');
});

