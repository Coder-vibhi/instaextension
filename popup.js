let isScanning = false;

const scanBtn = document.getElementById("scanBtn");
const stopBtn = document.getElementById("stopBtn");
const statusDiv = document.getElementById("status");
const resultDiv = document.getElementById("result");
const gridDiv = document.getElementById("grid");
const errorDiv = document.getElementById("error");

scanBtn.addEventListener("click", () => {

    if (isScanning) return;

    isScanning = true;
    statusDiv.innerText = "🔄 Scanning reels...";
    errorDiv.innerText = "";
    resultDiv.innerText = "Average View: --";
    gridDiv.innerHTML = "";

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        chrome.tabs.sendMessage(
            tabs[0].id,
            { action: "scanReels" },
            function (response) {

                isScanning = false;

                if (chrome.runtime.lastError) {
                    errorDiv.innerText =
                        "⚠️ Refresh Instagram page and try again.";
                    statusDiv.innerText = "";
                    return;
                }

                if (!response || !response.views || response.views.length === 0) {
                    errorDiv.innerText = "No reels found.";
                    statusDiv.innerText = "";
                    return;
                }

                const views = response.views;

                const { average, filtered, removed } =
                    calculateMedianFilteredAverage(views);

                displayGrid(filtered, removed);

                resultDiv.innerText =
                    "Average View: " + average.toLocaleString();

                statusDiv.innerText = "✅ Scan Complete";
            }
        );
    });
});

stopBtn.addEventListener("click", () => {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "stopScan" });
    });

    isScanning = false;
    statusDiv.innerText = "⛔ Scan Stopped";
});

function calculateMedianFilteredAverage(numbers) {

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    const median =
        sorted.length % 2 !== 0
            ? sorted[mid]
            : (sorted[mid - 1] + sorted[mid]) / 2;

    const upperLimit = median * 4;
    const lowerLimit = median * 0.25;

    const filtered = [];
    const removed = [];

    sorted.forEach(n => {
        if (n >= lowerLimit && n <= upperLimit) {
            filtered.push(n);
        } else {
            removed.push(n);
        }
    });

    const sum = filtered.reduce((a, b) => a + b, 0);

    const average = filtered.length > 0
        ? Math.floor(sum / filtered.length)
        : 0;

    return { average, filtered, removed };
}

function displayGrid(filtered, removed) {

    gridDiv.innerHTML = "";

    filtered.forEach(v => {
        const div = document.createElement("div");
        div.className = "cell";
        div.style.background = "#e8ffe8";
        div.style.color = "green";
        div.innerText = v.toLocaleString();
        gridDiv.appendChild(div);
    });

    removed.forEach(v => {
        const div = document.createElement("div");
        div.className = "cell";
        div.style.background = "#ffe6e6";
        div.style.color = "red";
        div.innerText = v.toLocaleString();
        gridDiv.appendChild(div);
    });
}