import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'
import './js/defaultUsalConfig.js'
import './js/swiper.js'


// Portfolio Section

let filterItems = document.querySelectorAll(".portfolio-filters .filter-item");
let portfolioItems = document.querySelectorAll(".portfolio-items-wrapper .portfolio-item")
filterItems.forEach(fitem => {
    fitem.addEventListener("click", event => {
        filterItems.forEach(fitem => fitem.classList.remove("active"));
        fitem.classList.add("active");
        if (fitem.dataset.filter == "all") {
            portfolioItems.forEach(ele => ele.classList.remove("d-none"));
        } else {
            portfolioItems.forEach(ele => {
                if (ele.dataset.itemstype == fitem.dataset.filter) {
                    if (ele.classList.contains("d-none"))
                        ele.classList.remove("d-none");
                } else {
                    ele.classList.add("d-none");
                }
            });
        }
    })
})
