const Product = ({ items }) => {
  return (
    <div className="filterProductContainer">
      {items.map((item) => {
        const { id, title, thumbnail, brand } = item;
        return (
          <div className="productDetails" key={id}>
            <img src={thumbnail} alt={title} />
            <div className="productContent">
              <h2>{title}</h2>
              <p>{brand}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
