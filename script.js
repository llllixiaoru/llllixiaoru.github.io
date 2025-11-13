// 打字机效果
const typewriterElement = document.getElementById("typewriter");
const text = "你好，我是李晓茹 —— 天津医科大学医学影像学专业学生";
let index = 0;

function typeWriter() {
    if (!typewriterElement) return;
    if (index <= text.length) {
        typewriterElement.textContent = text.slice(0, index);
        index++;
        setTimeout(typeWriter, 70);
    }
}
typeWriter();

// 自动年份
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 回到顶部
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    backToTopBtn.style.display = window.scrollY > 320 ? "block" : "none";
});
if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 滚动出现动画
const observed = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);
observed.forEach(el => observer.observe(el));

// 移动端导航
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
    });

    navList.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("open");
        });
    });
}
