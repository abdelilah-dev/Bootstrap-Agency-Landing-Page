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
        portfolioItems.forEach(ele => ele.removeAttribute('data-usal'))
        if (fitem.dataset.filter == "all") {
            portfolioItems.forEach(ele => {
                ele.setAttribute('data-usal', 'fade-u duration-800')
                ele.classList.remove("d-none")
            });
        } else {
            portfolioItems.forEach(ele => {
                if (ele.dataset.itemstype == fitem.dataset.filter) {
                    if (ele.classList.contains("d-none"))
                        ele.classList.remove("d-none");
                        ele.setAttribute('data-usal', 'fade-u duration-700')
                } else {
                    ele.classList.add("d-none");
                }
            });
        }
    })
})

// faq section
let faqHeader = document.querySelectorAll(".faq-header");

faqHeader.forEach((ele, index) => {
    ele.addEventListener("click", event => {
        document.querySelectorAll(".faq-item")[index].classList.toggle("faq-active");
    })
})

// contact section
let inputs = [...document.querySelectorAll("input"), document.querySelector("textarea")];
console.log(inputs);
inputs.forEach(ele => {
    ele.addEventListener("blur", event => {
        console.log("hehehehehe");
        if (ele.value != "")
            ele.classList.add("filled");
        else
            ele.classList.remove("filled");
    })
})
