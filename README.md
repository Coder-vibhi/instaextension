# 🎯 ReelStat - Instagram Average Reel Views Calculator

<p align="center">
  <img src="assets/banner.png" alt="ReelStat Banner" width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Chrome-Extension-blue?style=for-the-badge&logo=googlechrome">
  <img src="https://img.shields.io/badge/Instagram-Reels-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
  <img src="https://img.shields.io/badge/Version-1.0-success?style=for-the-badge">
</p>

## 📌 About

**ReelStat** is a Chrome Extension that calculates the **average views of an Instagram creator** based on their recent organic Reel performance.

Instead of showing a misleading average influenced by viral or promotional content, ReelStat filters the data intelligently to provide a more realistic estimate.

---

# ✨ Features

✅ Scan latest Instagram reels

✅ Calculates **Average Reel Views**

✅ Scans the **latest 25 reels**

✅ Automatically ignores the **latest 5 reels**

✅ Automatically ignores the **oldest 5 reels**

✅ Skips **Promotional / Sponsored reels**

✅ Gives a more accurate estimate of organic average views

---

# 🧠 How It Works

After opening an Instagram profile:

1. Click the **ReelStat** extension.
2. Press **Start Scan**.
3. The extension scans the latest **25 reels**.
4. It excludes:
   - Latest **5 reels**
   - Oldest **5 reels**
   - Promotional / Sponsored reels
5. Calculates the average views from the remaining organic reels.
6. Displays the estimated **Average Reel Views**.

---

# 📊 Scan Logic

```
Latest 25 Reels
        │
        ▼
Remove Latest 5 Reels
        │
        ▼
Remove Oldest 5 Reels
        │
        ▼
Remove Promotional Reels
        │
        ▼
Calculate Average Views
        │
        ▼
Display Result
```

---

# 🖥 Installation

## Step 1

Download this repository.

Or clone it:

```bash
git clone https://github.com/yourusername/reelstat.git
```

---

## Step 2

Extract the downloaded ZIP file.

---

## Step 3

Open **Google Chrome**

---

## Step 4

Go to

```
chrome://extensions/
```

or

```
Chrome Menu
→ Extensions
→ Manage Extensions
```

---

## Step 5

Enable

```
Developer Mode
```

(top-right corner)

---

## Step 6

Click

```
Load unpacked
```

---

## Step 7

Select the extracted **ReelStat** folder.

Done! 🎉

---

# 🚀 How to Use

1. Open Instagram.
2. Visit any public creator profile.
3. Click the **ReelStat** extension.
4. Press **Start Scan**.
5. Wait a few seconds.
6. The extension will display:

- Average Views
- Number of Reels Scanned
- Status

---

# 📸 Screenshots

## Home

![Home](assets/home.png)

---

## Scanning

![Scanning](assets/scanning.gif)

---

## Result

![Result](assets/result.png)

---

# 🎥 Demo

![Demo](assets/demo.gif)

---

# 📂 Project Structure

```
ReelStat
│
├── assets
│   ├── banner.png
│   ├── demo.gif
│   ├── home.png
│   ├── scanning.gif
│   └── result.png
│
├── popup.html
├── popup.js
├── background.js
├── content.js
├── manifest.json
└── README.md
```

---

# ⚠ Notes

- Works only on **Public Instagram Profiles**
- Requires Google Chrome
- Internet connection required
- Instagram UI updates may affect functionality

---

# 📌 Future Updates

- CSV Export
- Engagement Rate
- Likes Average
- Comments Average
- Story Insights
- Creator Report
- Multi-language Support

---

# 🤝 Contributing

Contributions are welcome!

Feel free to fork the project and submit a Pull Request.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps the project grow!

---

# 📄 License

This project is licensed under the MIT License.

---

<p align="center">
Made with ❤️ by <b>Your Name</b>
</p>
