const BREAKPOINT = 600;
const shareBtn = document.querySelector('.share-btn');
const shareIcons = document.querySelector('#share-icons');
const previewFooter = document.querySelector('.preview__footer');
const shareContainer = document.querySelector('.share-container');


function handleShareClickDesktop() {
    const classes = shareBtn.classList
    if (classes.contains('light-bg')) {
        classes.add('dark-bg');
        classes.remove('light-bg');
    } else {
        classes.remove('dark-bg');
        classes.add('light-bg');
    }
}

function handleShareClickMobile() {
    handleShareClickDesktop();
    if (previewFooter.style.display == "none") {
        previewFooter.style.display = "flex";
        previewFooter.appendChild(shareBtn);
        shareContainer.style.display = "none";        
    } else {
        previewFooter.style.display = "none";
        shareIcons.appendChild(shareBtn);
        shareContainer.style.display = "block";
    }
}

let handleShareClick;

function handleBreakpoint() {
    if (window.innerWidth > BREAKPOINT) {
        handleShareClick = handleShareClickDesktop;
        shareContainer.style.display = "block";
        shareBtn.setAttribute('popovertarget', 'share-icons');
        shareIcons.setAttribute('popover', "auto");
        shareIcons.classList.add('share-icons-desktop');
        shareIcons.classList.remove('share-icons-mobile');
    } else {
        handleShareClick = handleShareClickMobile;
        shareContainer.style.display = "none";
        shareIcons.removeAttribute('popover');
        shareBtn.removeAttribute('popovertarget');
        shareIcons.classList.remove('share-icons-desktop');
        shareIcons.classList.add('share-icons-mobile');
        if (previewFooter.style.display == "none") {
            previewFooter.style.display = "flex";
            previewFooter.appendChild(shareBtn);
        }
    }
}

window.onload = handleBreakpoint;
window.onresize = handleBreakpoint;
document.querySelector('.share-btn').addEventListener('click', (e) => handleShareClick(e));