* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg-dark: #050816;
    --bg-card: rgba(15, 23, 42, 0.7);
    --accent: #6366f1;
    --accent-soft: rgba(99, 102, 241, 0.18);
    --accent-2: #22c55e;
    --text-main: #e5e7eb;
    --text-muted: #9ca3af;
    --border-soft: rgba(148, 163, 184, 0.4);
    --radius-lg: 18px;
    --shadow-soft: 0 18px 45px rgba(15, 23, 42, 0.55);
    --glass-blur: 18px;
    --max-width: 1080px;
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei",
    sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-main);
    line-height: 1.7;
}

/* 背景渐变 + 噪点层 */
.page-bg {
    position: fixed;
    inset: 0;
    background:
        radial-gradient(circle at 10% 0%, #4f46e5 0, transparent 55%),
        radial-gradient(circle at 90% 10%, #22c55e 0, transparent 55%),
        radial-gradient(circle at 0% 90%, #0ea5e9 0, transparent 60%),
        radial-gradient(circle at 100% 95%, #f97316 0, transparent 60%),
        linear-gradient(135deg, #020617, #020617 40%, #020617);
    z-index: -2;
}

.page-noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='noStitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
    mix-blend-mode: soft-light;
    z-index: -1;
}

/* 头部导航 */
.site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0.8rem 1.25rem;
    margin-top: 0.5rem;
    border-radius: 999px;
    background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.88));
    border: 1px solid rgba(148, 163, 184, 0.45);
    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.65);
    backdrop-filter: blur(20px);
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.55rem;
}

.logo-mark {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 30%, #4ade80, #22c55e 40%, #22d3ee 90%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 700;
    color: #020617;
}

.logo-text {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.navbar ul {
    list-style: none;
    display: flex;
    gap: 0.6rem;
    font-size: 0.85rem;
}

.navbar a {
    color: var(--text-muted);
    text-decoration: none;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid transparent;
    transition: all 0.18s ease-out;
}

.navbar a:hover {
    color: #f9fafb;
    border-color: rgba(148, 163, 184, 0.6);
    background: radial-gradient(circle at top left, rgba(148, 163, 184, 0.25), transparent 65%);
}

.nav-toggle {
    display: none;
    background: none;
    border: 1px solid rgba(148, 163, 184, 0.6);
    border-radius: 999px;
    padding: 0.25rem 0.6rem;
    color: var(--text-main);
}

/* section 通用 */
.section {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2.5rem 1.25rem 2.2rem;
}

.section-alt {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
}

.section-header {
    margin-bottom: 1.2rem;
}

.section-header h2 {
    font-size: 1.4rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.section-header p {
    font-size: 0.9rem;
    color: var(--text-muted);
}

/* hero 区 */
.hero {
    padding-top: 2.2rem;
}

.hero-content {
    display: grid;
    grid-template-columns: minmax(0, 3.1fr) minmax(0, 2.3fr);
    gap: 1.75rem;
    align-items: flex-start;
}

.hero-tag {
    font-size: 0.8rem;
    color: var(--accent-2);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}

.hero-main h1 {
    font-size: clamp(2.0rem, 3vw + 0.8rem, 2.7rem);
    margin-bottom: 0.5rem;
}

.hero-sub {
    font-size: 0.95rem;
    color: var(--text-muted);
    max-width: 33rem;
}

.hero-actions {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.1rem;
    border-radius: 999px;
    font-size: 0.9rem;
    border: 1px solid transparent;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.18s ease-out;
}

.btn-primary {
    background: linear-gradient(135deg, #4ade80, #22c55e);
    color: #022c22;
    font-weight: 600;
}

.btn-primary:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
}

.btn-ghost {
    background: rgba(15, 23, 42, 0.55);
    border-color: rgba(148, 163, 184, 0.6);
    color: var(--text-main);
}

.btn-ghost:hover {
    background: rgba(15, 23, 42, 0.9);
}

.hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.9rem;
}

.meta-pill {
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(148, 163, 184, 0.6);
    font-size: 0.78rem;
    color: var(--text-muted);
}

/* hero 右侧卡片 */
.card {
    border-radius: var(--radius-lg);
    background: var(--bg-card);
    border: 1px solid var(--border-soft);
    box-shadow: var(--shadow-soft);
    padding: 1rem 1.1rem;
}

.glass {
    backdrop-filter: blur(var(--glass-blur));
}

.hero-photo-card {
    margin-bottom: 0.9rem;
}

.photo-frame {
    display: flex;
    justify-content: center;
    margin-bottom: 0.6rem;
}

.photo-frame img {
    width: 170px;
    height: 170px;
    border-radius: 999px;
    object-fit: cover;
    border: 3px solid rgba(248, 250, 252, 0.8);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
}

.photo-info {
    text-align: center;
    margin-bottom: 0.6rem;
}

.photo-name {
    font-weight: 600;
}

.photo-role {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.stat-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: space-between;
    margin-top: 0.3rem;
}

.stat-item {
    flex: 1 1 30%;
    min-width: 90px;
    padding: 0.35rem 0.5rem;
    border-radius: 0.75rem;
    background: radial-gradient(circle at top left, rgba(148, 163, 184, 0.35), rgba(15, 23, 42, 0.95));
}

.stat-label {
    font-size: 0.72rem;
    color: var(--text-muted);
}

.stat-value {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
}

.hero-mini {
    font-size: 0.9rem;
}

.hero-mini-title {
    font-weight: 600;
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
}

.hero-mini ul {
    list-style: disc;
    padding-left: 1.1rem;
    color: var(--text-muted);
}

/* 下滑提示 */
.scroll-hint {
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: var(--text-muted);
}

.scroll-line {
    width: 1px;
    height: 32px;
    background: linear-gradient(to bottom, rgba(148, 163, 184, 0.6), transparent);
    animation: scrollPulse 1.6s infinite;
}

@keyframes scrollPulse {
    0% { opacity: 0.1; transform: translateY(-4px); }
    50% { opacity: 0.9; transform: translateY(2px); }
    100% { opacity: 0.1; transform: translateY(-4px); }
}

/* 时间轴 */
.timeline {
    position: relative;
    padding-left: 0.8rem;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 0.6rem;
    top: 0.2rem;
    bottom: 0.2rem;
    width: 2px;
    background: linear-gradient(to bottom, rgba(148, 163, 184, 0.5), transparent);
}

.timeline-item {
    position: relative;
    margin-left: 0.9rem;
}

.timeline-dot {
    position: absolute;
    left: -1.1rem;
    top: 1.1rem;
    width: 11px;
    height: 11px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 30%, #4ade80, #22c55e);
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
}

.timeline-content {
    font-size: 0.92rem;
}

.timeline-time {
    font-size: 0.8rem;
    color: var(--accent-2);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.2rem;
}

.timeline-title {
    font-weight: 600;
}

.timeline-sub {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.timeline-desc {
    margin-top: 0.4rem;
    color: var(--text-muted);
}

/* stats */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
}

.stats-card ul {
    list-style: disc;
    padding-left: 1.1rem;
    font-size: 0.93rem;
}

/* projects */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.2rem;
}

.project-card h3 {
    margin-bottom: 0.3rem;
}

.project-card p {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.project-card ul {
    margin-top: 0.5rem;
    padding-left: 1.1rem;
    font-size: 0.9rem;
}

.project-tag {
    display: inline-block;
    margin-bottom: 0.4rem;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 0.18rem 0.6rem;
    border-radius: 999px;
    background: rgba(99, 102, 241, 0.22);
    color: #c7d2fe;
}

/* 荣誉 pill */
.honor-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
}

.honor-pill {
    font-size: 0.82rem;
    padding: 0.35rem 0.65rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(148, 163, 184, 0.7);
    color: var(--text-muted);
}

/* contact */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
}

.contact-card ul {
    list-style: none;
    font-size: 0.9rem;
}

.contact-card li + li {
    margin-top: 0.3rem;
}

/* footer */
.site-footer {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1.4rem 1.25rem 2rem;
    text-align: center;
    font-size: 0.75rem;
    color: var(--text-muted);
}

/* 回到顶部 */
#backToTop {
    position: fixed;
    right: 1.2rem;
    bottom: 1.2rem;
    padding: 0.45rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.7);
    background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.98), rgba(30, 64, 175, 0.95));
    color: #f9fafb;
    cursor: pointer;
    box-shadow: var(--shadow-soft);
    display: none;
}

/* 进场动画 */
.fade-in {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.45s ease-out, transform 0.45s ease-out;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* 自适应 */
@media (max-width: 840px) {
    .site-header {
        padding-inline: 0.9rem;
    }

    .navbar ul {
        position: absolute;
        right: 0.8rem;
        top: 3.4rem;
        flex-direction: column;
        align-items: flex-start;
        background: rgba(15, 23, 42, 0.98);
        padding: 0.6rem 0.7rem;
        border-radius: 1rem;
        display: none;
        box-shadow: 0 16px 30px rgba(15, 23, 42, 0.85);
    }

    .navbar ul.open {
        display: flex;
    }

    .nav-toggle {
        display: inline-block;
    }
}

@media (max-width: 760px) {
    .hero-content {
        grid-template-columns: 1fr;
    }

    .hero-side {
        order: -1;
    }

    .hero-sub {
        max-width: none;
    }
}
