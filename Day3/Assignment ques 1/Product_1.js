import { useState } from "react"
 
function Product_1()
{
    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");
    const [qty,setQty]=useState("");
    const [result,setResult]=useState("");
 
    function buttonClick()
    {
        if(qty <10)
        {
            setResult("Price after discount = "+qty * price);
        }
        else if(10<qty <20)
        {
            setResult("Price after discount = "+qty * price*0.95);
        }
        else if(20<qty <30)
        {
            setResult("Price after discount = "+qty * price*0.90);
        }
        else
        {
            setResult("Price after discount = "+qty * price*0.85);
        }
    }
    return(
        <>
        <h3>Product Store</h3>
        <hr/>
        <fieldset>
        <legend>Enter the details</legend>
        Product Name: <input type="text" value={pname} onChange={ (e) => setPname(e.target.value) }  />    
        <br></br>
        Product price : <input type="text" value={price} onChange={ (e) => setPrice(e.target.value) }  />    
        <br></br>
        Product quantity: <input type="text" value={qty} onChange={ (e) => setQty(e.target.value) }  />    
        <br></br>
        <input type="button" onClick={buttonClick} value="Total"></input>
        <h1>{result}</h1>
        </fieldset>
       
        </>
    )
}
 
export default Product_1;