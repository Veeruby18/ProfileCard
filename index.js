const currentTime = document.getElementById("ticking-time");

function updateTime() {
    if (!currentTime) return;
  currentTime.textContent = `${Date.now()} ms`;
}

updateTime();
setInterval(updateTime, 1000);
