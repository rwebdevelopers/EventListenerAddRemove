window.addEventListener('scroll', this.transformHeader);
  },
    activated () {
    window.addEventListener('scroll', this.transformHeader);
   },
   destroyed () {
    window.removeEventListener('scroll', this.transformHeader);
  },
  deactivated () {
    window.removeEventListener('scroll', this.transformHeader);
   },
   methods: {
    transformHeader () {
      const fixedbar = document.getElementById('mintsearchbar');
      if (window.pageYOffset > 100) {
        fixedbar.classList.add('mint-searchbar-bg-white');
      } else {
        fixedbar.classList.remove('mint-searchbar-bg-white');
      }
   },
