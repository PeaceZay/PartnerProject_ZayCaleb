

function openMobileNav() {
    const mobileNav = document.getElementById('mobileNavigation');
    const mobileNavList = document.getElementById('mobileNavList');
    let a = mobileNavList.getAttribute('style');
    if (a){
        mobileNavList.removeAttribute('style');
        document.getElementById('mobileNavigation').style.backgroundImage='url(/images/mobile-menu.png)';
    }else {
        mobileNavList.style.display = 'block';
        document.getElementById('mobileNavigation').style.backgroundImage='url(/images/mobile-close.png)';
    }
    mobileNavList.classList.toggle("show-nav");
};

