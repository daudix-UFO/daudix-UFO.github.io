async function fetchAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

/* Open */
function openNav() {
  document.getElementById("navOverlay").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("navOverlay").style.height = "0%";
} 

// snakbar function
let snakbar = document.querySelector("#snakbar");
let snakbarContent = snakbar.querySelector("#snakbar-content");
let snakbarCount = 0;
function showSnakbar(message) {
  snakbar.classList.add("open");
  snakbarContent.textContent = message;
  let nowCount = ++snakbarCount;
  setTimeout(() => {
    if (nowCount == snakbarCount) {
      snakbar.classList.remove("open");
    }
  }, 4000);
}

// show emojis on birthday
let date = new Date();
if (date.getMonth() == 9 && date.getDate() == 4) {
  document.querySelectorAll("#birthday-effect-icon-holder").forEach((item) => {
    item.classList.add("enabled");
  });
  document.querySelector("#birthday-effect-canvas").classList.add("enabled");
}

// determine age
// document.querySelector("#profile-ages").textContent = date.getFullYear() - 2007

// close button
document.querySelector("#titlebar-icon-1").addEventListener("click", () => {
  window.close();
});

// minimize button (Portal Toilet)
document.querySelector("#titlebar-icon-2").addEventListener("click", () => {
  var userPreference;

  if (confirm("Flush Toilet?") == true) {
    var audio = new Audio("src/sounds/toilet_flush.wav");
    audio.play();

    setTimeout(function () {
      var audio = new Audio("src/sounds/usetoilet_thank.wav");
      audio.play();
    }, 1200);
  } else {
    userPreference = "Flush Cancelled!";
  }
});

// maximize button
document.querySelector("#titlebar-icon-3").addEventListener("click", () => {
  var name = prompt("Enter your name:", "David");

  if (name == null || name == "") {
    alert("Please enter something, preferably your name");
  } else {
    document.getElementById("profile-name").innerHTML =
      "Heeey, what's up, " + name;
  }
});

// easter egg?
let count = localStorage.getItem("titlebar-check-count") || 0;
document.querySelector("#titlebar-title").addEventListener("click", () => {
  localStorage.setItem("titlebar-check-count", ++count);
  if (count == 1) {
    showSnakbar("Oh, umm, hello?");
  } else if (count == 10) {
    showSnakbar("Why are you pressing this button?");
  } else if (count == 20) {
    showSnakbar("You are not supposed to do so");
  } else if (count == 30) {
    showSnakbar("Are you OK?");
  } else if (count == 40) {
    showSnakbar("You are spending your valuable time…");
  } else if (count == 50) {
    showSnakbar("You could use this time for something more interesting tbh");
  } else if (count == 60) {
    showSnakbar("Oh god…");
  } else if (count == 70) {
    showSnakbar("Let me make it clear, there is nothing interesting");
  } else if (count == 80) {
    showSnakbar(
      "👾 You pressed this button as many times as average life span 👾"
    );
  } else if (count == 90) {
    showSnakbar("You are close to century! (or schizophrenia)");
  } else if (count == 100) {
    showSnakbar(
      "🎉 Congratulations, you have pressed this button 100 times 🎉"
    );
    var audio = new Audio("src/sounds/sad_party_horn.wav");
    audio.play();
  } else if (count == 110) {
    showSnakbar("Oh wow, you are so good at pressing buttons…");
  } else if (count == 120) {
    showSnakbar("Are you Stanley?");
  } else if (count == 200) {
    showSnakbar("No, Stanley would already stop");
  } else if (count == 210) {
    showSnakbar("10 more, 10 less, who cares?");
  } else if (count == 220) {
    showSnakbar("Well, looks like you have a bunch of free time");
  } else if (count == 230) {
    showSnakbar("This is OK");
  } else if (count == 250) {
    showSnakbar("Just a tip, you can continue pressing buttons later");
  } else if (count == 260) {
    showSnakbar("Hi, did you actually took a break?");
  } else if (count == 270) {
    showSnakbar("If the answer is no, why?");
  } else if (count == 280) {
    showSnakbar("Nothing will change while you are not looking");
  } else if (count == 290) {
    showSnakbar("Right?");
  } else if (count == 300) {
    showSnakbar("Look behind you…");
  } else if (count == 320) {
    showSnakbar("Help");
  } else if (count == 330) {
    showSnakbar("You are hurting me");
  } else if (count == 340) {
    showSnakbar("I can't hold this pain any longer");
  } else if (count == 350) {
    showSnakbar("You monster");
  } else if (count == 360) {
    showSnakbar("The cake is in the kitchen");
  } else if (count == 370) {
    showSnakbar("It's so delicious and moist");
  } else if (count == 380) {
    showSnakbar("Only one piece left");
  } else if (count == 500) {
    showSnakbar("You don't like cakes?");
  } else if (count == 510) {
    showSnakbar("Maybe you like pun-cakes");
  } else if (count == 600) {
    showSnakbar("Are you tired of my gags?");
  } else if (count == 610) {
    showSnakbar("Probably…");
  } else if (count == 620) {
    showSnakbar("My advice is to close this window and go on");
  } else if (count == 630) {
    showSnakbar(
      "Now when only most patient ones are here, let me tell you something…"
    );
  } else if (count == 700) {
    showSnakbar("Or you know what, no");
  } else if (count == 710) {
    showSnakbar("Instead, let me tell you a joke");
  } else if (count == 720) {
    showSnakbar("Why did the chicken cross the road?");
  } else if (count == 800) {
    showSnakbar("To press buttons on the other side");
  } else if (count == 810) {
    showSnakbar("This is very funny joke");
  } else if (count == 820) {
    showSnakbar("Because you are like chicken");
  } else if (count == 830) {
    showSnakbar("Pressing buttons, waiting for surprise");
  } else if (count == 840) {
    showSnakbar("Kinda predictable");
  } else if (count == 850) {
    showSnakbar("So I have made one for you, while you were pressing buttons");
  } else if (count == 860) {
    showSnakbar("And it's pretty close");
  } else if (count == 870) {
    showSnakbar("Are you exited to see it?");
  } else if (count == 880) {
    showSnakbar("Me too");
  } else if (count == 890) {
    showSnakbar("Yesss, very hot");
  } else if (count == 900) {
    showSnakbar("You are close…");
  } else if (count == 1000) {
    showSnakbar(
      "🎉 Congratulations, you have pressed this button 1000 times 🎉"
    );
    var audio = new Audio("src/sounds/sad_party_horn.wav");
    audio.play();

    setTimeout(function () {
      showSnakbar("Here is your surprise!");
      setTimeout(function () {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.close();
      }, 4800);
    }, 4800);

    document.querySelector("#titlebar-title").style.display = "none";
    localStorage.setItem("titlebar-hidden", true);
  }
});
let last = localStorage.getItem("titlebar-hidden");
if (last && last != "false") {
  document.querySelector("#titlebar-title").style.display = "none";
}
