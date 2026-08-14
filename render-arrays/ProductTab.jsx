import Product from "./Product.jsx"
function ProductTab(){
  let options =["Hi-tech","Durable","Fast"];
    return (
  <>
    <Product  title="phone"   price={40000}  features={options}/>

    <Product 
          title="laptop"  
          price={89000}
          features={options}/>

    <Product 
          title="Music 
          player" price={2000}
          features={options} />  
  </>
  );
}
export default ProductTab;