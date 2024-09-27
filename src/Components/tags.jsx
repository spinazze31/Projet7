function Tags(props) {
  const tagText = props.text;
  const tags = tagText.map((tag) => (
    <div key={tag}>
      <span className="tag"> {tag} </span>
    </div>
  ));
  return (
    <>
      <div className="tags_container"> {tags}</div>
    </>
  );
}
export default Tags;
