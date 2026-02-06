const form = document.getElementById('portfolio-form');
const amountInput = document.getElementById('coin-amount');
const priceInput = document.getElementById('coin-price');
const result = document.getElementById('result');

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const amount = Number(amountInput.value);
  const price = Number(priceInput.value);

  if (!Number.isFinite(amount) || !Number.isFinite(price) || amount < 0 || price < 0) {
    result.textContent = 'Please enter valid positive numbers.';
    return;
  }

  const estimatedValue = amount * price;
  result.textContent = `Estimated portfolio value: ${currencyFormatter.format(estimatedValue)}`;
});
