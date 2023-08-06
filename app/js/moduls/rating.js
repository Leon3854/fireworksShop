const rating = (allRating) => {
  const ratings = document.querySelectorAll(allRating);
  if (ratings.length > 0) {
    initRatings();
  }
  // Основная функция
  function initRatings() {
    let ratingActive;
    let ratingValue;
    // Перебераем все рейтинги на старнице
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }
    // Инитилизируем конткретный рейтинг
    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains("rating_set")) {
        setRating(rating);
      }
    }

    // Инициализация переменных
    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
      ratingValue = rating.querySelector(".rating__value");
    }

    // Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    // Возможность указать оценку
    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".rating__item");
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener("mouseenter", function (e) {
          // Обновление переменных
          initRatingVars(rating);
          // Обновление активных звёзд
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleave", function (e) {
          // Обновление активных звёзд
          setRatingActiveWidth();
        });
        ratingItem.addEventListener("click", function (e) {
          // Обновление переменных
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            // "Отправить" на сервер
            setRatingValue(ratingItem.value, rating);
          } else {
            // Отобразить указанную аценку
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          }
        });
      }
    }
  }
};
// rating(".rating");
export default rating;
