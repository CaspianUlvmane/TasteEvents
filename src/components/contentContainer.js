import "./contentContainer.css";

function ContentContainer({ data }) {
  console.log(data);
  let content = [];
  data.Text.forEach((element) => {
    console.log(element);
    content.push(<h3>{element}</h3>);
  });

  let id = data.Title.split(" ")[0];
  function toggleClosed() {
    document.getElementById(id).classList.toggle("closed");
    console.log(id);
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
