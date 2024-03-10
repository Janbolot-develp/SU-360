document.body.style.overflow = "hidden"; // Запрет прокрутки страницы
document.body.style.overflow = ""; // Возобновление прокрутки страницы

document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".transition-text span");

  // Устанавливаем пользовательский CSS переменной --index для каждой буквы
  letters.forEach((letter, index) => {
    letter.style.setProperty("--index", index);
  });

  // После завершения анимации букв, скрываем текст и показываем главный контент с задержкой
  setTimeout(function () {
    const transitionContainer = document.querySelector(".transition-container");
    const mainContent = document.querySelector(".main-content");
    transitionContainer.classList.add("hide");
    setTimeout(function () {
      transitionContainer.style.display = "none";
      mainContent.style.display = "block";
    }, 500); // Задержка перед показом основного контента (в данном случае 0.5 секунды)
  }, 2200); // Задержка перед запуском анимации (в данном случае 2.2 секунды)
});