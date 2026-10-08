  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks) navLinks.classList.toggle('open');
    if (hamburger) hamburger.classList.toggle('open');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (navLinks) {
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          if (hamburger) hamburger.classList.remove('open');
        });
      });
    }
  });

  /* ── SCROLLSPY MENU HIGHLIGHT ── */
  (function () {
    function updateActiveNav() {
      const navLinks = document.querySelectorAll('.nav-links a');
      if (!navLinks.length) return;

      const pathname = window.location.pathname;
      const isHomePage = pathname === '/' || 
                         pathname === '/index.html' || 
                         pathname === '/en/' || 
                         pathname === '/en' || 
                         pathname === '/en/index.html';

      // On inner subpages, keep the parent section highlighted
      if (!isHomePage) {
        let activeTarget = '';
        if (pathname.includes('/service-areas/')) {
          activeTarget = 'areas-de-servicio';
        } else if (pathname.includes('/servicios/') || pathname.includes('/services/')) {
          activeTarget = 'servicios';
        } else if (pathname.includes('/sobre-mapa') || pathname.includes('/about-mapa') || pathname.includes('/marilyn-paladinez')) {
          activeTarget = 'nosotros';
        } else if (pathname.includes('/blog')) {
          activeTarget = 'blog';
        }

        if (activeTarget) {
          navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            const isMatch = activeTarget === 'blog'
              ? (href.includes('/blog') || href.includes('/en/blog'))
              : (href.includes('#' + activeTarget));
            if (isMatch) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
        return;
      }

      // On Home page: dynamic scrollspy as user scrolls
      const sections = document.querySelectorAll('section[id]');
      if (!sections.length) return;

      const viewportAnchor = window.scrollY + 220;
      let currentSectionId = '';

      if (window.scrollY < 120) {
        currentSectionId = 'hero';
      } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentSectionId = 'ubicacion';
      } else {
        sections.forEach(section => {
          if (viewportAnchor >= section.offsetTop - 50) {
            currentSectionId = section.id;
          }
        });
      }

      if (currentSectionId) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href') || '';
          const hashIndex = href.indexOf('#');
          if (hashIndex !== -1) {
            const targetId = href.substring(hashIndex + 1);
            if (targetId === currentSectionId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        });
      }
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('load', updateActiveNav);
    document.addEventListener('DOMContentLoaded', updateActiveNav);
    setTimeout(updateActiveNav, 300);
  })();

  /* ── NAVBAR STICKY ── */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (mainNav) mainNav.classList.toggle('scrolled', window.scrollY > 60);
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

/* ── SERVICE IMAGE SCROLL EXIT FALLBACK ── */
if (!('animationTimeline' in document.documentElement.style)) {
  const serviceImgs = document.querySelectorAll('.service-card-img');
  if (serviceImgs.length > 0) {
    let ticking = false;
    function updateServiceImgs() {
      serviceImgs.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < 180) {
          const progress = Math.max(0, Math.min(1, (180 - rect.top) / 240));
          const scale = 1 - (progress * 0.15);
          const opacity = 1 - (progress * 0.65);
          img.style.transform = `scale(${scale})`;
          img.style.opacity = `${opacity}`;
        } else if (rect.top >= 180) {
          img.style.transform = '';
          img.style.opacity = '';
        }
      });
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateServiceImgs);
        ticking = true;
      }
    }, { passive: true });
  }
}

/* ── TESTIMONIALS SLIDER ── */
window.initTestimonialsSlider = function() {
  const track = document.getElementById('testiTrack');
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!track || !dotsWrap || !prevBtn || !nextBtn) return;

  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  let cur = 0, perView = 3, total = 0;

  function getPer() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 880) return 2;
    return 3;
  }

  function buildDots() {
    if (cards.length === 0) {
      dotsWrap.innerHTML = '';
      return;
    }
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
    if (cards.length === 0 || total === 0) return;
    cur = ((idx % total) + total) % total;
    const gap = 24;
    const cardW = cards[0].offsetWidth + gap;
    track.style.transform = `translateX(-${cur * perView * cardW}px)`;
    
    const dots = dotsWrap.querySelectorAll('.s-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  // Clone and replace buttons to remove previous click event listeners cleanly
  const newPrevBtn = prevBtn.cloneNode(true);
  const newNextBtn = nextBtn.cloneNode(true);
  prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
  nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

  newPrevBtn.addEventListener('click', () => { goTo(cur - 1); });
  newNextBtn.addEventListener('click', () => { goTo(cur + 1); });

  buildDots();

  // Reset offset on resize
  let rTimer;
  const handleResize = () => {
    clearTimeout(rTimer);
    rTimer = setTimeout(() => { cur = 0; buildDots(); goTo(0); }, 200);
  };
  
  if (window._testiResizeHandler) {
    window.removeEventListener('resize', window._testiResizeHandler);
  }
  window.addEventListener('resize', handleResize);
  window._testiResizeHandler = handleResize;
};

// Run initially
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.initTestimonialsSlider());
} else {
  window.initTestimonialsSlider();
}


/* ── FORM SUBMIT con EmailJS ── */
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const btn  = form.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  const fields = new FormData(form);
  const nombre = fields.get('full_name') || fields.get('name') || fields.get('nombre');
  const mobile = String(fields.get('phone') || fields.get('telefono') || '').trim();
  const telefono = mobile || 'No proporcionado';
  const email = fields.get('email');
  const selectedServices = fields.getAll('customer_services');
  const servicio = selectedServices.length ? selectedServices.join(', ') : (fields.get('servicio') || 'No seleccionado');
  const informational = fields.get('sms_informational') === 'yes';
  const marketing = fields.get('sms_marketing') === 'yes';
  const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
  if ((informational || marketing) && !mobile) {
    alert(lang === 'en' ? 'Enter your mobile number to authorize SMS.' : 'Ingresa tu número móvil para autorizar SMS.');
    return;
  }
  const consentBlock = form.querySelector('[data-consent-version]');
  const consentRecord = {
    sms_informational: informational,
    sms_marketing: marketing,
    consent_version: consentBlock ? consentBlock.dataset.consentVersion : null,
    submitted_at: new Date().toISOString(),
    source_url: window.location.origin + window.location.pathname,
    language: lang,
    informational_disclosure: consentBlock ? consentBlock.querySelector('[name="sms_informational"]').closest('label').textContent.trim() : '',
    marketing_disclosure: consentBlock ? consentBlock.querySelector('[name="sms_marketing"]').closest('label').textContent.trim() : ''
  };
  // Preserve the record in the existing email template's message field as well.
  const attribution = {};
  form.querySelectorAll('[data-lp-attribution]').forEach((input) => {
    if (input.value) attribution[input.name] = input.value;
  });
  const mensaje = (fields.get('mensaje') || 'Sin mensaje') + '\n\nSMS preferences / Preferencias SMS:\n' + JSON.stringify(consentRecord, null, 2)
    + (Object.keys(attribution).length ? '\n\nGoogle Ads attribution:\n' + JSON.stringify(attribution, null, 2) : '');

  btn.textContent = lang === 'en' ? '⏳ Sending...' : '⏳ Enviando...';
  btn.disabled = true;

  const templateParams = {
    nombre, telefono, email, servicio, mensaje, reply_to: email,
    ...consentRecord, ...attribution
  };

  emailjs.send('service_3yno2qa', 'template_t1o02hr', templateParams)
    .then(() => {
      // ── ANALYTICS CONVERSION TRACKING ──
      // Landing forms use the thank-you page as their sole form conversion.
      if (!form.dataset.successUrl) {
      try {
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', {
            event_category: 'ContactForm',
            event_label: servicio,
            value: 1
          });
        }
        if (typeof fbq === 'function') {
          fbq('track', 'Lead', {
            content_name: servicio,
            status: 'success'
          });
        }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_lead_submitted',
          lead_service: servicio,
          lead_name: nombre
        });
      } catch (trackErr) {
        console.warn('Analytics tracking error:', trackErr);
      }
      }

      if (form.dataset.successUrl) {
        const destination = new URL(form.dataset.successUrl, window.location.origin);
        if (destination.origin === window.location.origin) {
          window.location.assign(destination.href);
          return;
        }
      }
      form.style.transition = 'opacity 0.3s ease';
      form.style.opacity = '0';
      setTimeout(() => {
        form.style.display = 'none';
        const panel = form.closest('.contact-panel');
        if (panel) panel.style.removeProperty('min-height');
        success.classList.add('show');
        success.focus({ preventScroll: true });
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
    clearTimeout(auto);
    const randomTime = Math.floor(Math.random() * (12000 - 8000 + 1)) + 8000;
    auto = setTimeout(() => {
      goTo(cur + 1);
      resetAuto();
    }, randomTime);
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

// Light Mode Accessibility Handler
(function() {
  const lightModeToggle = document.getElementById('lightModeToggle');
  if (lightModeToggle) {
    lightModeToggle.addEventListener('click', () => {
      const active = document.documentElement.classList.toggle('light-mode');
      localStorage.setItem('light-mode', active);
      document.dispatchEvent(new CustomEvent('lightModeChanged', { detail: active }));
    });
  }
})();

/* ── AUTOMATED CONVERSION TRACKING (GA4, Meta Pixel, GTM) ── */
(function() {
  document.addEventListener('click', function(e) {
    const targetLink = e.target.closest('a');
    if (!targetLink) return;

    const href = targetLink.getAttribute('href') || '';

    try {
      // 1. WhatsApp Click Tracking
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        if (typeof gtag === 'function') {
          gtag('event', 'contact', {
            method: 'WhatsApp',
            event_category: 'Lead',
            event_label: href
          });
        }
        if (typeof fbq === 'function') {
          fbq('trackCustom', 'WhatsAppClick', {
            url: href,
            page: window.location.pathname
          });
        }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'whatsapp_click',
          click_url: href
        });
      }

      // 2. Phone Call Click Tracking
      else if (href.startsWith('tel:')) {
        const phoneNumber = href.replace('tel:', '');
        if (typeof gtag === 'function') {
          gtag('event', 'contact', {
            method: 'Phone',
            event_category: 'Lead',
            event_label: phoneNumber
          });
        }
        if (typeof fbq === 'function') {
          fbq('trackCustom', 'PhoneCallClick', {
            phone: phoneNumber,
            page: window.location.pathname
          });
        }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'phone_call_click',
          phone: phoneNumber
        });
      }

      // 3. Appointment / Booking Click Tracking
      else if (href.includes('/citas') || href.includes('/appointments')) {
        if (typeof gtag === 'function') {
          gtag('event', 'begin_checkout', {
            event_category: 'Appointment',
            event_label: href
          });
        }
        if (typeof fbq === 'function') {
          fbq('track', 'Schedule', {
            content_name: 'Book Appointment',
            page: window.location.pathname
          });
        }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'appointment_intent_click',
          click_url: href
        });
      }
    } catch (trackError) {
      console.warn('Analytics event tracking error:', trackError);
    }
  }, { passive: true });
})();
