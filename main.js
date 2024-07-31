document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.menu__items .page');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const itemsPerPage = 6; // Adjust this if you have a different number of items per page
  let currentPage = 0;

  function showPage(pageIndex) {
    const start = pageIndex * itemsPerPage;
    const end = start + itemsPerPage;

    pages.forEach((page, index) => {
      if (index >= start && index < end) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(pages.length / itemsPerPage) - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Initialize the first page
  showPage(currentPage);
});



const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 700,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 350,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 700,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 350,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 350,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 350,
});
