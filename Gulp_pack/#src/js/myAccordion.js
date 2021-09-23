let myAccordion = {
  btns: document.querySelectorAll(".accordion__btn"), //btn class
  contentBoxes: document.querySelectorAll(".accordion__content"), //content class

	init: function() {
		let that = this;
		this.btns.forEach(function (item) {
			item.addEventListener("click", function () {
				let id = this.getAttribute("data-btn");
		
				that.contentBoxes.forEach(function (cont) {
					let contId = cont.getAttribute("id");
					if (id == contId) {
						cont.classList.toggle("active");
					}
				});
			});
		});
	}
};

// myAccordion.init();