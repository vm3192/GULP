const tabsBtn = document.querySelectorAll(".work__nav-btn");
const tabsItems = document.querySelectorAll(".work__tabs-item")

tabsBtn.forEach(function (item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
});