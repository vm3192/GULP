let myTabs = {
  tabsButton: document.querySelectorAll(".works__nav-btn"), //tab class
  tabsContentBox: document.querySelectorAll(".works__item"), //content-box class

  init: function () {
		let that = this;
    this.tabsButton.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        that.tabsButton.forEach(function (item) {
          item.classList.remove("active");
        });

        tab.classList.add("active");

        that.tabsContentBox.forEach(function (value, i) {
          value.classList.remove("active");

          if (index == i) {
            value.classList.add("active");
          }
        });
      });
    });
  },
};

// myTabs.init();