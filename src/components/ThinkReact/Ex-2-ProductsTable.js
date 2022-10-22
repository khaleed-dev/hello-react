import { useState } from "react";

/* https://beta.reactjs.org/learn/thinking-in-react
    * It’s often easier to build the static version first and then add interactivity separately. Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.

    * To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. Props are a way of passing data from parent to child. (If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.)

    * You can either build “top down” by starting with building the components higher up in the hierarchy (like FilterableProductTable) or “bottom up” by working from components lower down (like ProductRow). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.
*/

function ProductCategoryRow({ category }){
  return (
      <tr>
          <th>{category}</th>
      </tr>
  );
}
function ProductRow({ product }){
  const name = product.stocked ? product.name : 
  <span style={{ color: 'red' }}>
      {product.name}
  </span>;

  return (
    <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
  )
}
function ProductTable({ products, filterText, inStockOnly }){
  const rows = []
  let lastCategory = null;

  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
        return
    }
    if(inStockOnly && !product.stocked){
        return
    }
    if(product.category !== lastCategory){
          rows.push(
          <ProductCategoryRow
               category={product.category}
               key={product.category}/>
          );
    }
    rows.push(
          <ProductRow
              product={product}
              key={product.name} />
    );
    lastCategory = product.category
  });
  return (
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
              {rows}
          </tbody>
      </table>
  );
}
function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}){
  return (
      <form>
          <input type="text"
                 value={filterText} 
                 placeholder="Search..."
                 onChange={(e) => onFilterTextChange(e.target.value)}/>
          <br></br>
          <label>
              <input type="checkbox"
                     checked={inStockOnly}
                     onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
              {' '}
              Only show products in stock
          </label>
      </form>
  );
}
export default function FilterableProductTable({ products }){
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setinStockOnly] = useState(false)
    return (
      <div className="container center">
          <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setinStockOnly}/>
          <ProductTable 
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}/>
      </div>
  )
}


