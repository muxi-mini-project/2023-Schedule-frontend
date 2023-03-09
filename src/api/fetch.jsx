const preurl = "http://127.0.0.1:4523/m1/2128895-0-default/";
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
    const response = await fetch(preurl+url, {
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




// TodoList
export async function CheckGet(data){
    tokenCheck();
    const response = await fetch(preurl+"calendar", {
        method: 'GET', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
    })
        .catch(error => console.log('error', error));

    return response.json();
}

export async function CompletePut(data){
    tokenCheck();
    const response = await fetch(preurl+"calendar/check/<content>", {
        method: 'PUT', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
    })
        .catch(error => console.log('error', error));

    return response.json();
}

export async function WritePost(data){
    tokenCheck();
    const response = await fetch(preurl+"calendar/write", {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
        body: { "content": "" },
    })
        .catch(error => console.log('error', error));

    return response.json();
}

export async function CrashGet(data){
    tokenCheck();
    const response = await fetch(preurl+"crash", {
        method: 'GET', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
    })
        .catch(error => console.log('error', error));

    return response.json();
}