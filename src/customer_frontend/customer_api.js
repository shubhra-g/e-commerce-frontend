const API_BASE_URL="http://localhost:8000"



export const signup=async(customerData)=>{
const response=await fetch('http://localhost:8000/customer/signup/',
{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        
    },
    body:JSON.stringify(customerData),
    });
return response.json();
}


export const login=async(customerData)=>{
    const response=await fetch('http://127.0.0.1:8000/customer/login/',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            
        },
        body:JSON.stringify(customerData),
        });
    return response.json();
    };