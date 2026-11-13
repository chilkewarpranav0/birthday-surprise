/*
  💗 EDIT YOUR WEBSITE HERE — no other file needs editing!
  Save this file after making changes, then refresh index.html.

  PHOTOS:
  1. Put your pictures inside assets/photos/
  2. Change each "file" below to the exact filename, including .jpg/.png.
  3. Keep the captions or write your own.

  MUSIC:
  Put an MP3 you are allowed to use inside assets/music/ and set musicFile
  to its filename, e.g. "our-song.mp3". Leave it "" for no music.

  PASSWORD:
  Set enabled to true and choose a password. This is a sweet front-door
  lock, not strong encryption: someone technical could inspect website files.
  Leave enabled false if you don't want a password screen.
*/
window.BIRTHDAY_SITE = {
  websiteTitle: "a little world for you",
  girlfriendName: "[Her name]",
  yourName: "[Your name / nickname]",

  openingTitle: "Hey, it's a little surprise for you! ♡",
  openingSubtitle: "Someone has made something special just for you...",
  openingButton: "Open Your Surprise 🎀",

  galleryTitle: "Our Memory Lane ♡",
  galleryIntro: "Every picture holds a little piece of my favourite story.",
  photos: [
    { file: "photo-1.jpg", caption: "One of my favourite days ♡" },
    { file: "photo-2.jpg", caption: "A little moment, a big memory" },
    { file: "photo-3.jpg", caption: "You make everything brighter ✨" },
    { file: "photo-4.jpg", caption: "Us, just being us ♡" },
    { file: "photo-5.jpg", caption: "A memory I keep close" },
    { file: "photo-6.jpg", caption: "More adventures together 🎀" }
  ],

  birthdayHeading: "A wish just for you! 🎂",
  birthdaySubtitle: "May your day be as lovely as your smile.",

  letterHeading: "A Little Letter for You 💌",
  letterGreeting: "My sweetest love,",
  letterBody: "[Write your own heartfelt birthday letter here. Replace this text with your words.]",
  letterSignoff: "With all my love,",
  signature: "[Your name]",

  finalMessage: "[Write your own secret final message here. This is your last surprise.]",
  finalSignature: "♡ always yours ♡",

  musicFile: "", // Example: "our-song.mp3"

  password: {
    enabled: false, // Change to true to show a password screen
    value: "pinklove" // Change this to your chosen password
  }
};
