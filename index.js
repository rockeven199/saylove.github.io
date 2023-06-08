function doingCard() {
    const start = document.querySelector(".start")
    const cardPart1 = document.querySelector(".part1");
    const cardContainer = document.querySelector(".card");
    const topEmojy = document.querySelector(".cat-pic-1");
    const topEmojyImg = document.querySelector(".cat-pic-1 img");
    const me = document.querySelector("#me");
    const getPackageLine = document.querySelector(".package-line img");

    getPackageLine.addEventListener('click', () => {
        let flag = cardPart1.dataset.canopenflag;
        if (flag == "true") {
            var temp = setTimeout(() => {
                start.style.zIndex = "1";
                cardContainer.removeAttribute('style')
                cardContainer.style.transform = "rotate(0deg)";
                cardContainer.style.top = "10%";
                cardPart1.style.animation = "openCard 1s ease-in-out forwards";
                clearTimeout(temp)
            }, 1000);
            getPackageLine.style.animation = "slideOut 1s forwards"
            cardPart1.dataset.canopenflag = "false";
        } else {
            cardContainer.style.transform = "rotate(180deg)";
            cardContainer.style.top = "25%";
            start.style.zIndex = "999";
            cardPart1.style.animation = "closeCard 1s ease-in-out forwards";
            cardPart1.dataset.canopenflag = "true";
        }
    });

    start.addEventListener('click', () => {
        let flag = cardPart1.dataset.canopenflag;
        if (flag == "true") {
            var temp = setTimeout(() => {
                start.style.zIndex = "1";
                cardContainer.removeAttribute('style')
                cardContainer.style.transform = "rotate(0deg)";
                cardContainer.style.top = "10%";
                cardPart1.style.animation = "openCard 1s ease-in-out forwards";
                clearTimeout(temp)
            }, 1000);
            getPackageLine.style.animation = "slideOut 1s forwards"
            cardPart1.dataset.canopenflag = "false";
        } else {
            cardContainer.style.transform = "rotate(180deg)";
            cardContainer.style.top = "25%";
            start.style.zIndex = "999";
            cardPart1.style.animation = "closeCard 1s ease-in-out forwards";
            cardPart1.dataset.canopenflag = "true";
        }
    });

    me.addEventListener('click', () => {
        let flag = cardPart1.dataset.canopenflag;
        if (flag == "true") {
            var temp = setTimeout(() => {
                start.style.zIndex = "1";
                cardContainer.removeAttribute('style')
                cardContainer.style.transform = "rotate(0deg)";
                cardContainer.style.top = "10%";
                cardPart1.style.animation = "openCard 1s ease-in-out forwards";
                clearTimeout(temp)
            }, 500);
            getPackageLine.style.animation = "slideOut 1s forwards"
            cardPart1.dataset.canopenflag = "false";
            cardContainer.removeAttribute('style')
            cardContainer.style.transform = "rotate(0deg)";
            cardContainer.style.top = "10%";
            cardPart1.style.animation = "openCard 1s ease-in-out forwards";
            // topEmojy.style.opacity = "1";
            setTimeout(() => {
                start.style.zIndex = "99";
                document.querySelector(".open-logo-container").style.opacity = "0"
            }, 1000);
            cardPart1.dataset.canopenflag = "false";
        }
    });
}

window.onload = () => {
    doingCard();
}