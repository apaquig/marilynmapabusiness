  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = '✅ ¡Mensaje enviado!';
    btn.style.background = '#25d366';
    setTimeout(() => {
      btn.textContent = '📩 Enviar mensaje';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }

  // Smooth nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.style.color = '';
          const href = a.getAttribute('href');
          if (href === '#' + sec.id || href === '/#' + sec.id) {
            a.style.color = '#cc0000';
          }
        });
      }
    });
  });

  /* ── NAVBAR STICKY ── */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── HAMBURGER ── */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const burger = document.getElementById('hamburger');
  const open = links.classList.toggle('active');
  burger.classList.toggle('open', open);
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
    document.getElementById('hamburger').classList.remove('open');
  });
});

/* ── SCROLL REVEAL ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── TESTIMONIALS SLIDER ── */
(function(){
  const track = document.getElementById('testiTrack');
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  let cur = 0, perView = 3, total;

  function getPer() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 880) return 2;
    return 3;
  }

  function buildDots() {
    perView = getPer();
    total = Math.ceil(cards.length / perView);
    dotsWrap.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 's-dot' + (i === cur ? ' active' : '');
      d.setAttribute('aria-label', 'Página ' + (i+1));
      d.addEventListener('click', () => { goTo(i); });
      dotsWrap.appendChild(d);
    }
  }

  function goTo(idx) {
    cur = ((idx % total) + total) % total;
    const gap = 24;
    const cardW = cards[0].offsetWidth + gap;
    track.style.transform = `translateX(-${cur * perView * cardW}px)`;
    dotsWrap.querySelectorAll('.s-dot').forEach((d,i) => d.classList.toggle('active', i === cur));
  }

  prevBtn.addEventListener('click', () => { goTo(cur - 1); });
  nextBtn.addEventListener('click', () => { goTo(cur + 1); });

  buildDots();

  let rTimer;
  window.addEventListener('resize', () => {
    clearTimeout(rTimer);
    rTimer = setTimeout(() => { cur = 0; buildDots(); goTo(0); }, 200);
  });
})();

/* ── FORM SUBMIT con EmailJS ── */
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const btn  = form.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  const inputs = form.querySelectorAll('input, select, textarea');
  const nombre   = inputs[0].value;
  const telefono = inputs[1].value || 'No proporcionado';
  const email    = inputs[2].value;
  const servicio = inputs[3].value || 'No seleccionado';
  const mensaje  = inputs[4].value || 'Sin mensaje';

  const lang = window.i18n ? window.i18n.currentLang : 'es';
  btn.textContent = lang === 'en' ? '⏳ Sending...' : '⏳ Enviando...';
  btn.disabled = true;

  const templateParams = {
    nombre, telefono, email, servicio, mensaje, reply_to: email
  };

  emailjs.send('service_3yno2qa', 'template_t1o02hr', templateParams)
    .then(() => {
      form.style.transition = 'opacity 0.3s ease';
      form.style.opacity = '0';
      setTimeout(() => {
        form.style.display = 'none';
        success.classList.add('show');
      }, 320);
    })
    .catch((err) => {
      btn.textContent = lang === 'en' ? '📩 Send message' : '📩 Enviar mensaje';
      btn.disabled = false;
      const errorMsg = lang === 'en'
        ? 'There was an error sending. Please contact us directly via WhatsApp at (862) 622-8339.'
        : 'Hubo un error al enviar. Por favor contáctanos directamente por WhatsApp al (862) 622-8339.';
      alert(errorMsg);
      console.error('EmailJS error:', err);
    });
}
//SLIDER DE SERVICIOS
/* ── HERO SLIDER ── */
(function () {
  const slider  = document.getElementById('heroSlider');
  const dotsWrap = document.getElementById('heroDots');
  const prevBtn  = document.getElementById('heroPrev');
  const nextBtn  = document.getElementById('heroNext');
  if (!slider) return;

  const originalSlides = Array.from(slider.querySelectorAll('.hero-slide'));
  const total = originalSlides.length;
  if (total === 0) return;

  // Clonar el primer y último slide para realizar un desplazamiento continuo infinito sin saltos bruscos
  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[total - 1].cloneNode(true);

  // Añadir los clones al inicio y al final del contenedor
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstChild);

  // La posición inicial es el índice 1 (el primer slide original)
  let cur = 1;
  let auto;
  let isTransitioning = false;

  // Ubicar inicialmente en el primer slide real
  slider.style.transform = `translateX(-${cur * 100}%)`;

  // Crear dots sincronizados con los slides originales
  originalSlides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'hero-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.addEventListener('click', () => { goTo(i + 1); resetAuto(); });
    dotsWrap.appendChild(d);
  });

  function goTo(idx, withTransition = true) {
    if (isTransitioning) return;
    
    cur = idx;
    if (!withTransition) {
      slider.style.transition = 'none';
    } else {
      slider.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      isTransitioning = true;
    }

    slider.style.transform = `translateX(-${cur * 100}%)`;

    // Sincronizar la clase activa en los dots
    let activeDot = cur - 1;
    if (activeDot < 0) activeDot = total - 1;
    if (activeDot >= total) activeDot = 0;

    dotsWrap.querySelectorAll('.hero-dot').forEach((d, i) =>
      d.classList.toggle('active', i === activeDot)
    );
  }

  // Detectar el final de la transición de desplazamiento para reposicionar instantáneamente
  slider.addEventListener('transitionend', () => {
    isTransitioning = false;
    
    if (cur === 0) {
      // Si llega al clon del último slide (índice 0), salta sin transición al último original
      slider.style.transition = 'none';
      cur = total;
      slider.style.transform = `translateX(-${cur * 100}%)`;
    } else if (cur === total + 1) {
      // Si llega al clon del primer slide (índice total + 1), salta sin transición al primer original
      slider.style.transition = 'none';
      cur = 1;
      slider.style.transform = `translateX(-${cur * 100}%)`;
    }
  });

  function resetAuto() {
    clearInterval(auto);
    auto = setInterval(() => goTo(cur + 1), 5000);
  }

  prevBtn.addEventListener('click', () => { goTo(cur - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goTo(cur + 1); resetAuto(); });

  // Desplazamiento táctil (swipe) en dispositivos móviles
  let startX = 0;
  slider.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', (e) => {
    if (isTransitioning) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? cur + 1 : cur - 1);
      resetAuto();
    }
  });

  resetAuto();
})();
