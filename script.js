let tabs = document.querySelectorAll("#tabs li");
let tabsArray = Array.from(tabs);

let tabsContent = document.querySelectorAll(".tab");
let tabsContentArray = Array.from(tabsContent);

tabsArray.forEach(function(ele){
    ele.addEventListener("click", function(){
        tabsArray.forEach(function (ele) {
            ele.classList.remove("active");
        })
        tabsContentArray.forEach(function(ele){
            ele.classList.remove("active-tab")
        })
        this.classList.add("active");
        document.querySelector(this.dataset.current).classList.add("active-tab");
    })
})