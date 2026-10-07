document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".position-row");

  rows.forEach((row, index) => {
    row.style.animationDelay = `${index * 100}ms`;
  });

  const nav = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 24) {
      nav.style.background = "rgba(13, 13, 24, 0.9)";
    } else {
      nav.style.background = "rgba(13, 13, 24, 0.7)";
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
