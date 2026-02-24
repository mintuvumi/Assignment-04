
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const totalCount = document.getElementById("total-count");

const allBtn = document.getElementById("all-btn");
const interviewTabBtn = document.getElementById("Interview-btn");
const rejectedTabBtn = document.getElementById("Rejected-btn");

const cards = document.querySelectorAll(".card");

let interview = 0;
let rejected = 0;
let total = cards.length;

// ===== TOTALCount =====
totalCount.innerText = total;

// ===== BUTTON =====
document.querySelectorAll(".interview-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = btn.closest(".card");
    const appliedBtn = card.querySelector(".Applied-btn");

    if (!card.classList.contains("interviewed")) {
      interview++;
      interviewCount.innerText = interview;

      appliedBtn.innerText = "Interview";
      appliedBtn.classList.remove("text-black");
      appliedBtn.classList.add("text-green-500");

      card.classList.add("interviewed");
      card.classList.remove("rejected");
    }
  });
});

// ===== BUTTON =====
document.querySelectorAll(".Rejected-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = btn.closest(".card");
    const appliedBtn = card.querySelector(".Applied-btn");

    if (!card.classList.contains("rejected")) {
      rejected++;
      rejectedCount.innerText = rejected;

      appliedBtn.innerText = "Rejected";
      appliedBtn.classList.remove("text-black");
      appliedBtn.classList.add("text-red-500");

      card.classList.add("rejected");
      card.classList.remove("interviewed");
    }
  });
});

// =====FUNCTION =====
document.querySelectorAll(".delete-icon").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = btn.closest(".card");
    card.remove();

    total--;
    totalCount.innerText = total;
  });
});

// ===== FUNCTION =====
allBtn.addEventListener("click", () => {
  cards.forEach(card => {
    card.style.display = "flex";
  });
});

interviewTabBtn.addEventListener("click", () => {
  let count = 0;

  cards.forEach(card => {
    if (card.classList.contains("interviewed")) {
      card.style.display = "flex";
      count++;
    } else {
      card.style.display = "none";
    }
  });

  document.querySelector("main h2:nth-child(2)").innerText =
    `${count} of ${total} jobs`;
});

rejectedTabBtn.addEventListener("click", () => {
  let count = 0;

  cards.forEach(card => {
    if (card.classList.contains("rejected")) {
      card.style.display = "flex";
      count++;
    } else {
      card.style.display = "none";
    }
  });

  document.querySelector("main h2:nth-child(2)").innerText =
    `${count} of ${total} jobs`;

  // rejected job 
  if (count === 0) {
    const section = document.getElementById("all-card");

    section.innerHTML = `
      <div class="text-center mt-10">
        <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" class="mx-auto w-32">
        <h3 class="text-2xl font-bold mt-5">No jobs available</h3>
        <p class="mt-2 text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
  }
});