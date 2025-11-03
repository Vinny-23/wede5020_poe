/* Accordion implementation */


document.addEventListener('DOMContentLoaded', () => {
  const accordions = Array.from(document.querySelectorAll('.accordion'));
  accordions.forEach(accordion => {
    const items = Array.from(accordion.querySelectorAll('.accordion-item'));
    if (!items.length) return;

    function closeAll() {
      items.forEach(i => {
        i.classList.remove('active');
        const btn = i.querySelector('.accordion-header');
        const panel = i.querySelector('.accordion-panel');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (panel) panel.style.maxHeight = null;
      });
    }

    function refreshPanel(panel) {
      const parent = panel.closest('.accordion-item');
      if (parent && parent.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }

    items.forEach((item, idx) => {
      const header = item.querySelector('.accordion-header');
      const panel = item.querySelector('.accordion-panel');
      if (!header || !panel) return;
      panel.style.overflow = 'hidden';
      panel.style.transition = 'max-height 320ms ease, padding 260ms ease, opacity 260ms ease';
      panel.style.maxHeight = null;
      if (!header.hasAttribute('aria-expanded')) header.setAttribute('aria-expanded', 'false');

      function open() {
        closeAll();
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        header.focus();
      }

      function close() {
        header.setAttribute('aria-expanded', 'false');
        item.classList.remove('active');
        panel.style.maxHeight = null;
      }

      function toggle() { (header.getAttribute('aria-expanded') === 'true') ? close() : open(); }

      header.addEventListener('click', toggle);
      header.addEventListener('keydown', (e) => {
        const key = e.key;
        const isSpace = key === ' ' || key === 'Spacebar' || key === 'Space';
        const enabled = ['ArrowDown','ArrowUp','Home','End','Enter','Space',' ','Spacebar'];
        if (!enabled.includes(key) && !isSpace) return;
        e.preventDefault();
        if (key === 'Enter' || isSpace) { toggle(); return; }
        if (key === 'Home') { items[0].querySelector('.accordion-header')?.focus(); return; }
        if (key === 'End') { items[items.length - 1].querySelector('.accordion-header')?.focus(); return; }
        const dir = key === 'ArrowDown' ? 1 : key === 'ArrowUp' ? -1 : 0;
        if (dir !== 0) { let next = (idx + dir + items.length) % items.length; items[next].querySelector('.accordion-header')?.focus(); }
      });

      const imgs = Array.from(panel.querySelectorAll('img'));
      imgs.forEach(img => img.addEventListener('load', () => refreshPanel(panel)));
    });

    window.addEventListener('resize', () => { items.forEach(i => { const panel = i.querySelector('.accordion-panel'); if (panel) refreshPanel(panel); }); });
  });
});