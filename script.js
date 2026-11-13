(() => {
  "use strict";
  const cfg = window.BIRTHDAY_SITE || {};
  const $ = (id) => document.getElementById(id);
  const pages = [...document.querySelectorAll(".page")];

  function setText(id, value) {
    const el = $(id);
    if (el && value !== undefined && value !== null) el.textContent = value;
  }
  setText("site-title", cfg.websiteTitle);
  document.title = `${cfg.websiteTitle || "A Little World"} ♡`;
  setText("opening-title", cfg.openingTitle);
  setText("opening-subtitle", cfg.openingSubtitle);
  setText("start-button", cfg.openingButton);
  setText("birthday-heading", cfg.birthdayHeading);
  setText("birthday-subtitle", cfg.birthdaySubtitle);
  setText("letter-heading", cfg.letterHeading);
  setText("letter-greeting", cfg.letterGreeting);
  setText("letter-body", cfg.letterBody);
  setText("letter-signoff", cfg.letterSignoff);
  setText("signature", cfg.signature);
  setText("final-message", cfg.finalMessage);
  setText("final-signature", cfg.finalSignature);

  function showPage(id) {
    pages.forEach(page => {
      const active = page.id === id;
      page.classList.toggle("active", active);
      page.setAttribute("aria-hidden", String(!active));
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id === "cake") $("cake").classList.remove("cake-wiggle");
  }
  $("start-button").addEventListener("click", () => showPage("memories"));
  document.querySelectorAll("[data-next]").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.next)));
  document.querySelectorAll("[data-prev]").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.prev)));
  $("home-button").addEventListener("click", () => showPage("welcome"));
  $("restart-button").addEventListener("click", () => {
    $("secret-message").hidden = true;
    $("reveal-button").hidden = false;
    showPage("welcome");
  });

  const gallery = $("gallery");
  (cfg.photos || []).forEach((photo, index) => {
    const card = document.createElement("figure");
    card.className = "photo-card";
    card.style.setProperty("--delay", `${index * 90}ms`);
    const frame = document.createElement("div");
    frame.className = "photo-frame";
    const img = document.createElement("img");
    img.src = `assets/photos/${photo.file}`;
    img.alt = photo.caption || `Memory ${index + 1}`;
    img.loading = "lazy";
    img.onerror = () => {
      frame.classList.add("placeholder");
      frame.innerHTML = `<div class="placeholder-inner"><span>♡</span><b>Your photo goes here</b><small>${escapeHtml(photo.file || "photo.jpg")}</small></div>`;
    };
    frame.appendChild(img);
    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption || "A lovely memory ♡";
    card.append(frame, caption);
    gallery.appendChild(card);
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  $("reveal-button").addEventListener("click", () => {
    $("reveal-button").hidden = true;
    $("secret-message").hidden = false;
    $("secret-message").classList.remove("reveal");
    requestAnimationFrame(() => $("secret-message").classList.add("reveal"));
  });

  const audio = $("background-music");
  const musicButton = $("music-toggle");
  if (cfg.musicFile) audio.src = `assets/music/${cfg.musicFile}`;
  else musicButton.title = "Add a music filename in EDIT_HERE.js to enable music";
  musicButton.addEventListener("click", async () => {
    if (!audio.src) {
      alert("To add music, put an MP3 in assets/music/ and enter its filename in EDIT_HERE.js.");
      return;
    }
    try {
      if (audio.paused) {
        await audio.play();
        musicButton.classList.add("playing");
        musicButton.innerHTML = "♫ <span>Pause</span>";
      } else {
        audio.pause();
        musicButton.classList.remove("playing");
        musicButton.innerHTML = "♫ <span>Music</span>";
      }
    } catch {
      alert("The music file could not be played. Check its filename and try an MP3 file.");
    }
  });

  const gate = $("password-overlay");
  if (cfg.password && cfg.password.enabled) {
    gate.hidden = false;
    document.body.classList.add("locked");
    $("password-form").addEventListener("submit", (event) => {
      event.preventDefault();
      if ($("password-input").value === String(cfg.password.value)) {
        gate.hidden = true;
        document.body.classList.remove("locked");
      } else {
        $("password-error").textContent = "Not quite, sweetheart. Try again ♡";
        $("password-input").select();
      }
    });
  }
})();
