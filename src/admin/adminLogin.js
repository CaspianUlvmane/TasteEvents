import "./adminLogin.css";

function AdminLogin() {
  return (
    <div id="admin">
      <h1>Logga in som administratör</h1>
      <div id="error"></div>
      <form>
        <input
          type="text"
          label="name"
          placeholder="Förnamn"
          id="adminName"
        ></input>
        <input
          type="password"
          label="password"
          placeholder="Lösenord"
          id="adminPassword"
        ></input>
        <button id="adminButton" onClick={validate}>
          Logga In
        </button>
      </form>
    </div>
  );
}

function validate(event) {
  event.preventDefault();
  let name = document.getElementById("adminName").value;
  let password = document.getElementById("adminPassword").value;

  if (name !== "MrsWolfmoon72" && password !== "Felix99Caspian02") {
    document.getElementById("error").textContent =
      "Namn eller lösenord var fel";
    return;
  } else {
    localStorage.setItem("admin", true);
    window.location.reload();
  }
}

export default AdminLogin;
