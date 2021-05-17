const counters = document.querySelectorAll('.counter');
console.log(counters);
function updateCounter(counter) {
  let count = +counter.textContent;
  const target = +counter.getAttribute('data-target');
  const step = Math.ceil(target / 300);
  const interval = setInterval(() => {
    count += step;
    counter.textContent = count;
    if (!(count < target)) {
      counter.textContent = target;
      clearInterval(interval);
    }
  }, 1);
}

counters.forEach((counter) => {
  updateCounter(counter);
});
