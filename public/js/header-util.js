const header = document.querySelector('.page-header')
const nav = document.querySelector('.nav')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.add('header-disappear');
            nav.classList.add('header-disappear')
            return;
        }

        header.classList.remove('header-disappear');
        nav.classList.remove('header-disappear')
    })
  });
  
  // Tell the observer which elements to track
observer.observe(document.querySelector('.works'));