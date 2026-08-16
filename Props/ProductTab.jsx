import Product from "./Product.jsx"
function ProductTab(){
    return (
  <>
    <Product title="phone" price={40000}/>
    <Product title="laptop"  price={89000}/>
    <Product title="Music player" />  {/* default price is displayed */}
  </>
  );
}
export default ProductTab;