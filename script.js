gsap.registerPlugin(ScrollTrigger);

// ---------- Nav ----------
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 600);
});

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---------- Custom cursor ----------
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;
if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  const tick = () => {
    cursor.style.transform = `translate(${mx}px, ${my}px)`;
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.transform = `translate(${fx}px, ${fy}px)`;
    requestAnimationFrame(tick);
  };
  tick();
  document.querySelectorAll('a, button, .project-card, .service-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ---------- Hero parallax ----------
gsap.to('#heroImg', { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
gsap.to('#philosophyImg', { yPercent: 15, ease: 'none', scrollTrigger: { trigger: '.philosophy', start: 'top bottom', end: 'bottom top', scrub: true } });

// ---------- Reveal animations ----------
gsap.utils.toArray('.reveal-up').forEach(el => {
  gsap.fromTo(el, { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
  });
});

gsap.utils.toArray('.reveal-img').forEach(el => {
  gsap.fromTo(el, { clipPath: 'inset(0 100% 0 0)', opacity: 0.6 }, {
    clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.4, ease: 'power4.out',
    scrollTrigger: { trigger: el, start: 'top 80%' }
  });
});

// mask text reveal (character/word)
gsap.utils.toArray('.reveal-mask').forEach(el => {
  const text = el.textContent;
  el.innerHTML = '';
  const wrap = document.createElement('span');
  wrap.className = 'mask-wrap';
  const inner = document.createElement('span');
  inner.className = 'mask-inner';
  inner.textContent = text;
  wrap.appendChild(inner);
  el.appendChild(wrap);
  gsap.fromTo(inner, { yPercent: 110 }, {
    yPercent: 0, duration: 1.2, ease: 'power4.out',
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});

// hero staggered
const heroTl = gsap.timeline({ delay: 0.3 });
heroTl.from('.hero-eyebrow', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' })
  .from('.hero-title .word', { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.15, ease: 'power4.out' }, '-=0.5')
  .from('.hero-tagline', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
  .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
  .from('.hero .btn', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

// ---------- Stats counter ----------
document.querySelectorAll('.stat-num').forEach(el => {
  const target = parseInt(el.dataset.count, 10);
  ScrollTrigger.create({
    trigger: el, start: 'top 85%', once: true,
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target, duration: 1.8, ease: 'power2.out',
        onUpdate() { el.textContent = Math.round(this.targets()[0].val); }
      });
    }
  });
});

// ---------- Projects grid ----------
const grid = document.getElementById('projectsGrid');
PROJECTS.forEach((p, i) => {
  const card = document.createElement('article');
  card.className = 'project-card' + (i % 3 === 1 ? ' wide' : '');
  card.dataset.index = i;
  card.innerHTML = `
    <div class="project-img-wrap">
      <img src="${p.thumb}" alt="${p.title}" loading="lazy" />
    </div>
    <div class="project-meta">
      <span class="project-cat">${p.category}</span>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
    </div>
  `;
  grid.appendChild(card);
});

// reveal cards
gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.fromTo(card, { y: 60, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: (i % 3) * 0.1,
    scrollTrigger: { trigger: card, start: 'top 85%' }
  });
});

// hover scale image
document.querySelectorAll('.project-card').forEach(card => {
  const img = card.querySelector('img');
  card.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.08, duration: 0.7, ease: 'power2.out' }));
  card.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.7, ease: 'power2.out' }));
  card.addEventListener('click', () => openProject(parseInt(card.dataset.index, 10)));
});

// ---------- Modal ----------
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
function openProject(i) {
  const p = PROJECTS[i];
  modalBody.innerHTML = `
    <div class="modal-gallery">
      ${p.images.map(src => `<img src="${src}" alt="${p.title}" />`).join('')}
    </div>
    <div class="modal-info">
      <span class="project-cat">${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  gsap.fromTo('.modal-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
}
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ---------- Services ----------
const servicesList = document.getElementById('servicesList');
SERVICES.forEach(s => {
  const li = document.createElement('li');
  li.className = 'service-item';
  li.innerHTML = `
    <div class="service-row">
      <span class="service-name">${s.name}</span>
      <span class="service-arrow">?</span>
    </div>
    <p class="service-detail">${s.detail}</p>
  `;
  servicesList.appendChild(li);
});

// ---------- Testimonials ----------
const track = document.getElementById('testimonialTrack');
const dotsWrap = document.getElementById('tDots');
TESTIMONIALS.forEach((t, i) => {
  const slide = document.createElement('div');
  slide.className = 'testimonial-slide';
  slide.innerHTML = `
    <div class="quote-mark">“</div>
    <p class="quote-text">${t.quote}</p>
    <div class="quote-author">
      <strong>${t.name}</strong>
      <span>${t.project}</span>
    </div>
  `;
  track.appendChild(slide);

  const dot = document.createElement('button');
  dot.className = 't-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Go to review ${i + 1}`);
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

let current = 0;
let autoTimer;
function goTo(i) {
  current = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.t-dot').forEach((d, idx) => d.classList.toggle('active', idx === current));
}
document.getElementById('tPrev').addEventListener('click', () => { goTo(current - 1); resetAuto(); });
document.getElementById('tNext').addEventListener('click', () => { goTo(current + 1); resetAuto(); });

function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 5000); }
function resetAuto() { clearInterval(autoTimer); startAuto(); }
startAuto();

// ---------- Contact form ----------
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    document.getElementById('formSuccess').classList.add('show');
    form.reset();
  }, 900);
});

// ---------- Philosophy text char reveal ----------
// already handled by reveal-mask
