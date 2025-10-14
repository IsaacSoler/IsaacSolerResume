// Dark mode toggle and basic UX niceties
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const printBtn = document.getElementById('printBtn');
const year = document.getElementById('year');

year && (year.textContent = new Date().getFullYear());

// Respect stored preference; default to dark
const saved = localStorage.getItem('theme');
if(saved === 'light'){ root.classList.add('light'); }

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  themeToggle.textContent = root.classList.contains('light') ? '🌞' : '🌙';
});

printBtn?.addEventListener('click', (e)=>{
  e.preventDefault();
  window.print();
});
