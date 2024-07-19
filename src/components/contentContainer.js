import "./contentContainer.css";

function ContentContainer({ data }) {
  console.log(data);
  let content = [];
  data.Text.forEach((element) => {
    console.log(element);
    content.push(<h3>{element}</h3>);
  });
  return (
    <>
      <div className="contentContainer">
        <h2>{data.Title}</h2>
        <div className="content">{content}</div>
      </div>
    </>
  );
}

export default ContentContainer;
