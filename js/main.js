window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {

    const navBar = document.getElementById("navBar");
    const up = document.getElementById("up");
    const demoChange = document.getElementById("demoBtn");

    if (document.documentElement.scrollTop > 100) {
        navBar.classList.add("pa-fixed-header");
        up.classList.add("pa-up");
        demoChange.classList.add("pa-demo");
    } 
    else {
        navBar.classList.remove("pa-fixed-header");
        up.classList.remove("pa-up");
        demoChange.classList.remove("pa-demo");
    }
} 