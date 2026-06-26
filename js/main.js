// ========================================
// CUSTOM CURSOR
// ========================================
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cur.style.left = e.clientX + 'px';
  cur.style.top = e.clientY + 'px';
});

// ========================================
// SCROLL REVEAL (IntersectionObserver)
// ========================================
const obs = new IntersectionObserver(
  (els) => {
    els.forEach((el, i) => {
      if (el.isIntersecting) {
        setTimeout(() => el.target.classList.add('visible'), i * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
