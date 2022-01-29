// HEADER SCROLL START - AZIZBEK RAKHIMJONOV

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {

    const navBar = document.getElementById("navBar");
    const up = document.getElementById("up");
    const demoChange = document.getElementById("demoBtn");
    const black = document.getElementById("wholeBlack");
    const blackTwo = document.getElementById("wholeBlackTwo");
    const blackThree = document.getElementById("wholeBlackThree");
    const blackFour = document.getElementById("wholeBlackFour");
    const blackFive = document.getElementById("wholeBlackFive");
    const blackSix = document.getElementById("wholeBlackSix");
    const blackSeven = document.getElementById("wholeBlackSeven");
    const blackEight = document.getElementById("wholeBlackEight");
    const blackNine = document.getElementById("wholeBlackNine");
    const elImgWhite = document.getElementById("imgWhite");
    const elImgBlack = document.getElementById("imgBlack");
    

    if (document.documentElement.scrollTop > 100) {
        navBar.classList.add("pa-fixed-header");
        up.classList.add("pa-up");
        demoChange.classList.add("pa-demo");
        black.classList.add("pa-black");
        blackTwo.classList.add("pa-black");
        blackThree.classList.add("pa-black");
        blackFour.classList.add("pa-black");
        blackFive.classList.add("pa-black");
        blackSix.classList.add("pa-black");
        blackSeven.classList.add("pa-black");
        blackEight.classList.add("pa-black");
        blackNine.classList.add("pa-black");
        elImgBlack.classList.add('show');
    } 
    else {
        navBar.classList.remove("pa-fixed-header");
        up.classList.remove("pa-up");
        demoChange.classList.remove("pa-demo"); 
        black.classList.remove("pa-black");
        blackTwo.classList.remove("pa-black");
        blackThree.classList.remove("pa-black");
        blackFour.classList.remove("pa-black");
        blackFive.classList.remove("pa-black");
        blackSix.classList.remove("pa-black");
        blackSeven.classList.remove("pa-black");
        blackEight.classList.remove("pa-black");
        blackNine.classList.remove("pa-black");
        elImgBlack.classList.remove('show');
    }
} 

// HERO SCROLL END
// SEARCH MODAL START

let elSearchModal = document.getElementById('searchModal');
let elSearchBtn = document.getElementById('searchBtn');
let elCloseBtn = document.getElementById('closeBtn');

elSearchBtn.addEventListener('click', function() {
    elSearchModal.classList.add('show-it');
}) 

elCloseBtn.addEventListener('click', function() {
    elSearchModal.classList.remove('show-it');
})

// SEARCH MODAL END