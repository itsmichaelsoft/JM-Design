(function(){
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if(menuBtn && menu){
    menuBtn.addEventListener('click', ()=>{
      const isHidden = menu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isHidden));
    });
    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', ()=> {
        menu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    // Close menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && !menu.classList.contains('hidden')){
        menu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Contact form (demo only)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if(form && msg){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Form submission (demo):', data);
      msg.textContent = 'Thank you! We\'ll be in touch within one business day.';
      msg.className = 'text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-3 py-2 text-xs sm:text-sm';
      msg.classList.remove('hidden');
      form.reset();
      setTimeout(() => msg.classList.add('hidden'), 5000);
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = String(new Date().getFullYear()); }
})();
