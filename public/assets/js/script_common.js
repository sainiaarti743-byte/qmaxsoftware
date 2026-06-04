var className = "sticky-header",
    scrollTrigger = 500;

function spinner(e) {
    $(e).prop("disabled", !0).html('<span class="ezulix-refresh refresh-loader"></span>')
}
window.onscroll = function() {
    window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger ? document.getElementsByTagName("header")[0].classList.add(className) : document.getElementsByTagName("header")[0].classList.remove(className)
};