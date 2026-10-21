document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const openBtn = document.getElementById("openBtn");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      if (music) {
        music.play().catch(() => {});
      }

      alert("💖 Happy Birthday Anonna! 💖");
    });
  }
});
