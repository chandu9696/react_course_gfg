
import { useEffect,useState} from "react";


interface Iproduct
{
    name:string,
    modal:string,
    price:number,
    category:string
}

export default function MongoData()
{
    const [product,setProduct]=useState<Iproduct[]>([]);
    const [name,setname]=useState<string>('')
    const [modal,setmodal]=useState<string>('')
    const [price,setprice]=useState<number>(0)
    const [category,setcategory]=useState<string>('')
    const [loading,setLoading]=useState<boolean>(true)
    useEffect(()=>
    {
        async function api()
        {
            // setLoading(true)
            const respose=await fetch('https://nodeexpr.herokuapp.com/api/getproduct')
            const jason=await respose.json()
            setProduct(jason)
            console.log(jason)
            setLoading(false)
            // console.log(product)
        }
        api();
    // const interval =  setInterval(() => {   
    //     api()
    //  },1000);
     
    // api()
    // return () => clearInterval(interval);
    },[])
    function test(obj:Iproduct) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('https://nodeexpr.herokuapp.com/api/insert', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    // test();
    function Handlealldata(e:any)
    {
        e.preventDefault()
        const obj:Iproduct={name:name,modal:modal,price:price,category:category}
        test(obj)
    }
    if(!loading)
    return(
      
        <>
        <div>Produts Data</div>
        {console.log(product)}
        {product.map((item,i)=>{
           
            return(<div key={i}>
            {item.name}
            </div>)
        })}

        <form onSubmit={Handlealldata}>
            <div>
            <input type='text' onChange={(e)=>{setname(e.target.value)}}/>
            <input type='text' onChange={(e)=>{setmodal(e.target.value)}}/>
            <input type='number' onChange={(e)=>{setprice(parseInt(e.target.value))}}/>
            <input type='text' onChange={(e)=>{setcategory(e.target.value)}}/>
            <button type='submit'>Submit</button>
            </div>
        </form>
        {/* <button onClick={test}>Add</button> */}


    </>
    )
    else
    {
       return <><p>Loading</p></>
    }
}