const typewriterElement = document.getElementById('typewriter');
const text = '你好，我是李晓茹 —— 天津医科大学医学影像学专业学生';
let index = 0;

function typeWriter() {
    if (!typewriterElement) return;
    if (index <= text.length) {
        typewriterElement.textContent = text.slice(0, index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
