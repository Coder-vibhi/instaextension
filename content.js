let stopRequested = false;

function convertToNumber(text) {
    text = text.replace(/,/g, "").trim();
    const match = text.match(/([\d,.]+)([KM]?)/i);
    if (!match) return null;

    let num = parseFloat(match[1].replace(/,/g, ""));
    const suffix = match[2]?.toUpperCase();

    if (suffix === "K") num *= 1000;
    if (suffix === "M") num *= 1000000;

    return Math.floor(num);
}

function extractViews() {
    const reels = document.querySelectorAll("a[href*='/reel/']");
    const views = [];

    reels.forEach(reel => {

        const text = reel.innerText;

        if (!text) return;

        const matches = text.match(/[\d,.]+[KM]?/g);

        if (!matches) return;

        for (let raw of matches) {
            const val = convertToNumber(raw);
            if (val && val >= 500) {
                views.push(val);
                break; // take first valid large number as views
            }
        }
    });

    return views;
}

function humanScrollUntil25() {
    return new Promise((resolve) => {

        stopRequested = false;
        let attempts = 0;

        const interval = setInterval(() => {

            if (stopRequested) {
                clearInterval(interval);
                resolve(extractViews().slice(0, 25));
                return;
            }

            window.scrollBy(0, 400);
            attempts++;

            const views = extractViews();

            if (views.length >= 25 || attempts >= 60) {
                clearInterval(interval);

                setTimeout(() => {
                    resolve(extractViews().slice(0, 25));
                }, 1500);
            }

        }, 1000);

    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "scanReels") {
        humanScrollUntil25().then(data => {
            sendResponse({ views: data });
        });
        return true;
    }

    if (request.action === "stopScan") {
        stopRequested = true;
    }
});