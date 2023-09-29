const FilterTab = ({ categories, activeCategory, filterItem }) => {
  return (
    <>
      <div className="filterTab">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className={`${
                activeCategory === category ? " activerfilter" : ""
              }`}
              onClick={() => filterItem(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FilterTab;
