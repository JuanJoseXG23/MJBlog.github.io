function filterMemories() {
  const fromDate = document.getElementById("fromDate").value;
  const toDate = document.getElementById("toDate").value;

  document.querySelectorAll(".memory-card").forEach(card => {
    const memoryDate = card.dataset.date;
    let show = true;

    if (fromDate && memoryDate < fromDate) show = false;
    if (toDate && memoryDate > toDate) show = false;

    card.style.display = show ? "block" : "none";
  });
}

function resetFilter() {
  document.getElementById("fromDate").value = "";
  document.getElementById("toDate").value = "";

  document.querySelectorAll(".memory-card").forEach(card => {
    card.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date("2023-03-18T00:00:00");

  function updateLoveTimer() {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);

    const seconds = diff % 60;
    diff = Math.floor(diff / 60);

    const minutes = diff % 60;
    diff = Math.floor(diff / 60);

    const hours = diff % 24;
    diff = Math.floor(diff / 24);

    const days = diff % 30;
    diff = Math.floor(diff / 30);

    const months = diff % 12;
    const years = Math.floor(diff / 12);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  setInterval(updateLoveTimer, 1000);
  updateLoveTimer();
});

const buttons = document.querySelectorAll('#regionSelector button');
const regions = document.querySelectorAll('.region-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const region = btn.dataset.region;

    regions.forEach(r => {
      r.classList.toggle('d-none', r.dataset.region !== region);
    });
  });
});


