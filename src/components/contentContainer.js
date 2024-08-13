import "./contentContainer.css";

function ContentContainer({ data }) {
  let content = [];
  data.Text.forEach((element) => {
    content.push(<h3>{element}</h3>);
  });

  let id = data.Title.split(" ")[0];
  function toggleClosed() {
    document.getElementById(id).classList.toggle("closed");
  }

  return (
    <>
      <div
        id={id}
        className="contentContainer closed"
        onClick={() => {
          toggleClosed();
        }}
      >
        <h2>{data.Title}</h2>
        <div className="toggleSymbol">V</div>
        <div className="content">{content}</div>
      </div>
    </>
  );
}

export default ContentContainer;
