let myRating = {
  ratings: document.querySelectorAll(".blockquote__rating"), //указать класс рейтингов

  init: function () {
    for (let i = 0; i < this.ratings.length; i++) {
      this.listenClick(this.ratings[i]);
    }
  },

  refresh: function (item) {
    for (let i = 0; i < item.length; i++) {
      item[i].classList.remove("active");
    }
  },

  addActive: function (item, index) {
    for (let i = 0; i <= index; i++) {
      item[i].classList.add("active");
    }
  },

  listenClick: function (item) {
    let currentRating = item.querySelectorAll("img"); //указать тег "звезды"
		let that = this;

    currentRating.forEach(function (star, index) {
      star.addEventListener("click", function () {
        that.refresh(currentRating);
        that.addActive(currentRating, index);
      });
    });
  },
};

// myRating.init();