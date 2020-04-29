window.onload = function() {
    const tabLinks = document.querySelectorAll('.tabbar a');
    tabLinks.forEach(function (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.selected')
              .classList.remove('selected');
            this.classList.add('selected')
        }, false)
    })
}