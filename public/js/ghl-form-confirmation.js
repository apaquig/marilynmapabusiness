/* Observe acknowledgements from GHL's own tracker; never submit a second request. */
(() => {
  const nativeFetch = window.fetch.bind(window);
  const trackingId = 'tk_92b14bc678ea4eb3b89a2a27dca3f16f';
  let pending = null;
  function finish(ok) {
    if (!pending) return;
    const { form, button, originalText, timer } = pending;
    pending = null;
    clearTimeout(timer);
    button.disabled = false;
    button.textContent = originalText;
    if (!ok) {
      alert(document.documentElement.lang === 'en' ? 'We could not confirm receipt. Please contact us on WhatsApp at (862) 622-8339.' : 'No pudimos confirmar la recepción. Contáctanos por WhatsApp al (862) 622-8339.');
      return;
    }
    if (form.dataset.successUrl) {
      const url = new URL(form.dataset.successUrl, location.origin);
      if (url.origin === location.origin) {
        sessionStorage.setItem('lp-notary-confirmed-submission', '1');
        location.assign(url.href);
        return;
      }
    }
    form.style.display = 'none';
    const success = document.getElementById(form.id === 'sijsForm' ? 'sijsSuccess' : 'formSuccess');
    if (success) { success.style.display = 'block'; success.classList.add('show'); success.focus(); }
    window.dataLayer = window.dataLayer || [];
    const leadService = new FormData(form).get('servicio') || 'Consulta';
    window.dataLayer.push({ event: 'form_lead_submitted', lead_service: leadService });
    if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { lead_service: leadService, method: 'website_form' });
  }
  window.fetch = async function(input, init) {
    let submission = false;
    try {
      const url = new URL(typeof input === 'string' ? input : input.url, location.href);
      if (url.pathname.endsWith('/external-tracking/events') && typeof init?.body === 'string') {
        const event = JSON.parse(init.body);
        submission = event.trackingId === trackingId && event.type === 'external_form_submission';
      }
    } catch {}
    try {
      const response = await nativeFetch(input, init);
      if (submission) finish(response.ok);
      return response;
    } catch (error) { if (submission) finish(false); throw error; }
  };
  window.handleGhlSubmit = function(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (pending || !form.checkValidity()) return;
    const button = form.querySelector('[type="submit"]');
    pending = { form, button, originalText: button.textContent, timer: setTimeout(() => finish(false), 20000) };
    button.disabled = true;
    button.textContent = document.documentElement.lang === 'en' ? 'Sending…' : 'Enviando…';
  };
})();
