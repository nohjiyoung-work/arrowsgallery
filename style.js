document.addEventListener("DOMContentLoaded", function () {
    const arrowGrid = document.querySelector(".arrow-grid");
    const infoIcon = document.querySelector(".info");
    let showTimer;

    arrowGrid.addEventListener("mouseenter", () => {
      showTimer = setTimeout(() => {
        infoIcon.style.opacity = "1";
        infoIcon.style.pointerEvents = "auto";
      }, 2000);
    });

    arrowGrid.addEventListener("mouseleave", () => {
      clearTimeout(showTimer);
      infoIcon.style.opacity = "0";
      infoIcon.style.pointerEvents = "none";
    });
  });