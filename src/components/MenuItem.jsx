import "./styles.css";

export default function MenuItem({ data }) {
  //Calculate the midpoint of the data.menu array, and then use the slice method to split the array into two separate arrays: leftColumn and rightColumn.
  const numItems = data.menu.length;
  const midPoint = Math.ceil(numItems / 2);

  const leftColumn = data.menu.slice(0, midPoint);
  const rightColumn = data.menu.slice(midPoint);

  return (
    <div className="wrapper">
      <h3 className="category-description">{data.description}</h3>
      <div className="row">
        <div className="column">
          {/* Render leftColumn in a separate column using the map method. */}
          {leftColumn.map((menuItem) => (
            <div className="menu-item" key={menuItem.item}>
              <h5>{menuItem.item}</h5>
              <div className="mi-meta">
                <p>{menuItem.description}</p>
                <div className="menu-price">{menuItem.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="column">
          {/* Render rightColumn in a separate column using the map method. */}
          {rightColumn.map((menuItem) => (
            <div className="menu-item" key={menuItem.item}>
              <h5>{menuItem.item}</h5>
              <div className="mi-meta">
                <p>{menuItem.description}</p>
                <div className="menu-price">{menuItem.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
