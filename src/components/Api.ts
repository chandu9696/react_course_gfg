export async function api()
{
    const respose=await fetch('https://jsonplaceholder.typicode.com/users')
    const jason=await respose.json()
    return jason[0].name;

}
export async function api2()
{
    const respose=await fetch('https://jsonplaceholder.typicode.com/users')
    const jason=await respose.json()
    return jason

}
export async function api3()
{
    const respose=await fetch(`https://reqres.in/api/users?page=${page}`)
    const json=await respose.json()
    return json.data;
   

}