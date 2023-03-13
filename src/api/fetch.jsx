const preurl = "http://localhost:3000/api/v1/";

    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1 ;
    const day = time.getDate();

function tokenCheck(){
    const token = localStorage.getItem('token');
    if(!token){return }
}

export async function postData(url, data){
    tokenCheck();
    let d = JSON.decycle(data);
    const response = await fetch(preurl+url, {
        method: 'POST', 
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(d)
    })

    return response.json();
}

export async function postDataa(url, data){
    tokenCheck();
    let d = JSON.decycle(data);
    const response = await fetch(preurl+url, {
        method: 'POST', 
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded" ,
            "Authorization": localStorage.getItem('token'),
            "Year":year,
            "Month":month,
            "Day":day,
            "Schid":data.id,
            "Connection": "keep-alive"
        },
        body:JSON.stringify({schedule:d.schedule}),
        redirect: 'follow'
    })

    return response.json();
}

export async function getJSON(url){
    tokenCheck();
    const response = await fetch(preurl+url, {
        method: 'GET', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": localStorage.getItem('token'),
            "Year":year,
            "Month":month,
            "Day":day
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




// 引入JSON扩展包解决循环调用
if (typeof JSON.decycle !== "function") {
    JSON.decycle = function decycle(object, replacer) {
        "use strict";
        var objects = new WeakMap();
        return (function derez(value, path) {
            var old_path;
            var nu;
            if (replacer !== undefined) {
                value = replacer(value);
            }
            if (
                typeof value === "object"
                && value !== null
                && !(value instanceof Boolean)
                && !(value instanceof Date)
                && !(value instanceof Number)
                && !(value instanceof RegExp)
                && !(value instanceof String)
            ) {
                old_path = objects.get(value);
                if (old_path !== undefined) {
                    return {$ref: old_path};
                }

                objects.set(value, path);

                if (Array.isArray(value)) {
                    nu = [];
                    value.forEach(function (element, i) {
                        nu[i] = derez(element, path + "[" + i + "]");
                    });
                } else {
                    nu = {};
                    Object.keys(value).forEach(function (name) {
                        nu[name] = derez(
                            value[name],
                            path + "[" + JSON.stringify(name) + "]"
                        );
                    });
                }
                return nu;
            }
            return value;
        }(object, "$"));
    };
}
if (typeof JSON.retrocycle !== "function") {
    JSON.retrocycle = function retrocycle($) {
        "use strict";

        var px = /^\$(?:\[(?:\d+|"(?:[^\\"\u0000-\u001f]|\\(?:[\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*")\])*$/;

        (function rez(value) {
            if (value && typeof value === "object") {
                if (Array.isArray(value)) {
                    value.forEach(function (element, i) {
                        if (typeof element === "object" && element !== null) {
                            var path = element.$ref;
                            if (typeof path === "string" && px.test(path)) {
                                value[i] = eval(path);
                            } else {
                                rez(element);
                            }
                        }
                    });
                } else {
                    Object.keys(value).forEach(function (name) {
                        var item = value[name];
                        if (typeof item === "object" && item !== null) {
                            var path = item.$ref;
                            if (typeof path === "string" && px.test(path)) {
                                value[name] = eval(path);
                            } else {
                                rez(item);
                            }
                        }
                    });
                }
            }
        }($));
        return $;
    };
}
