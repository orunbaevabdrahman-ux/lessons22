const tabs = document.querySelectorAll(".tab_content_item");
const contents = document.querySelectorAll(".tab-content_block");

let currentIndex = 0;

function changeTab(index) {
    tabs.forEach(function(tab_content_item) {
        tab_content_item.classList.remove("active");
    });

    contents.forEach(function(content) {
        content.classList.remove("active");
    });

    tabs[index].classList.add("active");
    contents[index].classList.add("active");

    currentIndex = index;
}


setInterval(function() {
    currentIndex++;

    if (currentIndex >= tabs.length) {
        currentIndex = 0;
    }

    changeTab(currentIndex);
}, 3000);


tabs.forEach(function(tab_content_item, index) {
    tab_content_item.addEventListener("click", function() {
        changeTab(index);
    });
});
