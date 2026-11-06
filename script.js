function demoLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill in both fields!");
    return;
  }

  alert("Demo Login Successful! 🎉");

  document.getElementById("password").value = "";
}
function demoLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Fill both fields!");
        return;
    }

    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h2>Demo Login Result</h2>
        <p>Username: ${escapeHTML(username)}</p>
        <p>Password: ••••••••</p>
        <p>Status: Simulation Completed</p>
    `;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[c]);
}