const preurl = "116.204.121.9:1729/api/v1/";
function tokenCheck(){
    const token = localStorage.getItem('token');
    if(!token){return }
}

export async function postData(url, data){
    tokenCheck();
    const response = await fetch(preurl+url, {
        method: 'POST', 
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(data)
    })
        .catch(error => console.log('error', error));

    return response.json();
}

export async function getJSON(url){
    tokenCheck();
    const response = await fetch(preurl+url, {
        method: 'GET', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
    })
        .catch(error => console.log('error', error));

    return response.json();
}

export async function putData(url, data){
    tokenCheck();
    const response = await fetch(preurl+url+data, {
        method: 'PUT', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
        .catch(error => console.log('error', error));

    return response.json();
}