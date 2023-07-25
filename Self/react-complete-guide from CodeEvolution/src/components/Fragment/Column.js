import react from "react";

function Column() {
  const items = [];
  return (
    <react.Fragment>
      {items.map((item) => (
        <react.Fragment key={item.id}>
          <h3>Title</h3>
          <p>{item.title}</p>
        </react.Fragment>
      ))}
      <td>Name:</td>
      <td>User</td>
    </react.Fragment>
    //* Or We can use the short hand(Empty Close Tag) indication but the only limitation is that we can't have the key trag.
    // <>
    //   <td>Name:</td>
    // </>
  );
}

export default Column;
