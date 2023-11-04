// rate_start
// rate_end
// rate_btn
let rate = 0;

rate_btn.addEventListener("click", () => {
  rate_start.classList.toggle("toggleDisplay");
  rate_end.classList.toggle("toggleDisplay");
  your_rate.textContent = rate;
});

function myRate(a) {
  rate = a;
}
