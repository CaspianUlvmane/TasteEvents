function Burger() {
  return (
    <>
      <div
        id="burger"
        onClick={() => {
          document.getElementById("navigation").classList.toggle("burger_open");
          document.getElementById("burger").classList.toggle("burger_open");
        }}
      >
        III
      </div>
    </>
  );
}

export default Burger;
