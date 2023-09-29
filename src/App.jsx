import { useState } from "react";
import "./App.css";
import FilterTab from "./component/filterTab";
import Product from "./component/product";
import items from "./data/data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [product, setProduct] = useState(items);
  const [activeCategory, setactiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    setactiveCategory(category);
    if (category === "all") {
      setProduct(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setProduct(newItem);
  };

  return (
    <>
      <div className="container">
        <FilterTab
          categories={categories}
          activeCategory={activeCategory}
          filterItem={filterItem}
        />
        <Product items={product} />
      </div>
    </>
  );
}

export default App;
