const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('sub-btn');
const resetBtn = document.getElementById('dismiss-btn');
const errorText = document.getElementById('error-text');
const subPage = document.getElementById('sub-div');
const successPage = document.getElementById('success-div');
const confirmedEmail = document.getElementById('confirmed-email');

// for validating the email provided
const isValidEmail = (input) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(input);
};

// function for the submit button
submitBtn.addEventListener('click', () => {
  if (emailInput.value.trim() === '' || !isValidEmail(email.value.trim)) {
    errorText.style.display = 'block';
    emailInput.style.background = 'rgba(255, 0, 0, 0.2)';
    emailInput.style.border = '1px solid rgba(255, 0, 0, 0.8)';
  }
  if (isValidEmail(email.value.trim())) {
    subPage.style.display = 'none';
    successPage.style.display = 'block';
    errorText.style.display = 'none';
    confirmedEmail.textContent = emailInput.value;
  }
});

resetBtn.addEventListener('click', () => {
  subPage.style.display = 'flex';
  successPage.style.display = 'none';
  emailInput.value = '';
  emailInput.style.background = 'none';
  emailInput.style.border = '1px solid hsla(231, 7%, 60%, 0.7)';
});
