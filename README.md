🕒 Clock Website

A simple and elegant analog and digital clock website built using HTML, CSS, and JavaScript.
It displays the current time dynamically and updates every second, using JavaScript’s Date() object.
Perfect for learning real-time DOM manipulation and basic web animations.

🚀 Features

⏰ Real-Time Clock: Displays the current time accurately using JavaScript.

🎨 Beautiful UI: Styled with CSS for a smooth and modern look.

🧭 Analog + Digital Display (optional): You can easily add or switch between clock styles.

🌗 Custom Background: Add gradient or shaded background colors for a better appearance.

💻 Responsive Design: Works on all devices (desktop, tablet, and mobile).

🧩 Technologies Used
Technology	Description
HTML5	Structure of the web page
CSS3	Styling, layout, and animation
JavaScript (ES6)	Handles time logic and real-time updates
📁 Folder Structure
clock-website/
│
├── index.html        # Main HTML file
├── style.css         # Styling for the clock
└── script.js         # JavaScript for clock functionality

⚙️ How It Works

JavaScript’s Date() object fetches the current hour, minute, and second.

The time is converted into rotation angles for clock hands:

hour = 30*hours + minutes/2
minute = 6*minutes
second = 6*seconds


CSS rotates each hand accordingly using transform: rotate().

🎨 Example Enhancements

Add Google Fonts for better typography:

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">


Use gradient background in CSS:

body {
  background: linear-gradient(135deg, #2b5876, #4e4376);
}

📸 Screenshot (optional)

(Add a preview image of your clock here if available)

![Clock Preview](screenshot.png)

💡 Future Improvements

Add Dark/Light Mode toggle

Include Date Display

Create Digital Clock + Alarm Feature

Add Timezone Selector

🧑‍💻 Author

Prachi Patle
🎓 B.Tech (Information Technology)
💻 Passionate about web development and UI design.
