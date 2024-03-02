document.addEventListener("DOMContentLoaded", function () {
    var listItems = document.querySelectorAll(".CartsNavList li");
    var contents = document.querySelectorAll(".content");

    listItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");

            listItems.forEach(function (li) {
                li.classList.remove("blue");
            });

            this.classList.add("blue");

            contents.forEach(function (content) {
                content.classList.remove("active");
            });

            document.getElementById(targetId).classList.add("active");
        });
    });
});



const searchInput = document.getElementById('searchInput');
const inventoryList = document.getElementById('myList');
const items = inventoryList.getElementsByTagName('li');

searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();

    Array.from(items).forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            item.classList.add('activ');
        } else {
            item.classList.remove('activ');
        }
    });
    setTimeout(() => {
        Array.from(items).forEach(item => {
            item.classList.remove('activ');
        });
    }, 1000);
});


////////////////


