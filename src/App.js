import { useState } from "react";


import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./component/Card";

//Database
import products from './db/data';

function App() {
  const [selectedCategory,setSelectedCategory] = useState(null);

  /* Input filter */
  const [query,setQuery] = useState("");

  const handleInputChange = e =>{
    setQuery(e.target.value);
  }

  const filteredItems = products.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  /* Radio filter */
  const handleChange = e =>{
    setSelectedCategory(e.target.value);
  }

  /* Button filter */
  const handleClick = e =>{
    setSelectedCategory(e.target.value);
  }

  function filteredData(products,selected,query){
    let fillteredProducts = products

    // Filltering input items
    if(query) {
      fillteredProducts = filteredItems;
    }

    // Selected filer
    if(selected) {
      fillteredProducts = fillteredProducts.filter(({category,color,company,
        newPrice,title}) => category === selected || color === selected || 
        company === selected || newPrice === selected || title === selected
      );
    }

    return fillteredProducts.map(({img,title,star,reviews,
      newPrice,prevPrice}) => (
        <Card 
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products,selectedCategory,query);
  

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation 
        handleInputChange={handleInputChange}
      />
      <Recommended
        handleClick={handleClick}
      />
      <Products result={result}/>
    </>
  );
}

export default App;
