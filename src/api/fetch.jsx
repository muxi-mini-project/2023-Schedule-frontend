const preurl = "http://test-cn.your-api-server.com/";
function tokenCheck(){
    const token = localStorage.getItem('token');
    if(!token){return }
}


// Login
export async function LoginPost(data = {}){
    const response = await fetch(preurl+"login", {
        method: 'POST', 
        headers: {
            "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)",
            "Content-Type": "application/json;charset=utf-8",
        },
        body: {
            "password": "",
            "uid": ""
        },
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return response.json();
}


// TodoList
export async function CheckGet(data = {}){
    tokenCheck();
    const response = await fetch(preurl+"calendar", {
        method: 'GET', 
        headers: {
            "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)",
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return response.json();
}

export async function CompletePut(data = {}){
    tokenCheck();
    const response = await fetch(preurl+"calendar/check/<content>", {
        method: 'PUT', 
        headers: {
            "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)",
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return response.json();
}

export async function WritePost(data = {}){
    tokenCheck();
    const response = await fetch(preurl+"calendar/write", {
        method: 'POST', 
        headers: {
            "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)",
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
        body: {"content": "<content>"},
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return response.json();
}

export async function CrashGet(data = {}){
    tokenCheck();
    const response = await fetch(preurl+"crash", {
        method: 'GET', 
        headers: {
            "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)",
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token')
        },
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return response.json();
}