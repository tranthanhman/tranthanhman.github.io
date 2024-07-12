(function () {
    const $loadingScreen = document.querySelector('#loading')
    const $scrollDown = document.querySelector('#scroll-down')

    const locoScroll  = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
    });
    locoScroll.stop()

    // Deactivate page scroll when open loading screen
    document.addEventListener('wheel', function () {
        if ($loadingScreen.style.display === 'none') {
            locoScroll.start()
        }
    });

    // Hidden scroll down ui when user scroll mouse
    locoScroll.on('scroll', function () {
        $scrollDown.style.opacity = '0'
    })
})();
