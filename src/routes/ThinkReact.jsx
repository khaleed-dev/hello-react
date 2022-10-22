import Info from '../components/ThinkReact/Ex-1-Thinking-React'
import FilterableProductTable from '../components/ThinkReact/Ex-2-ProductsTable'

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
export default function ThinkReact() {
    return (
      <>
        <Info name={'React'}/>
        <hr></hr>
        <FilterableProductTable products={PRODUCTS} />
        <hr></hr>
      </>
    )
}