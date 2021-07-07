// TopNav Start
window.addEventListener( 'scroll', function() {
    var top = document.querySelector(".TopNav");
    top.classList.toggle('Change', window.scrollY > 0)
} )
// TopNav End