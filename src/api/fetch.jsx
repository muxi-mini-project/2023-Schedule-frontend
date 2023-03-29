const preurl = "/api/v1/";

function tokenCheck() {
	const token = localStorage.getItem('token');
	if (!token) return;
	else return token;
}

export async function postData(url, data, temp) {
	if (temp === 0) {
		const response = await fetch(preurl + url, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				"Authorization": tokenCheck()
			},
			body: JSON.stringify(data)
		});
		
		return response.json();
	} else {
		let time = new Date();
		let datas = new URLSearchParams(Object.entries(data)).toString();
		const response = await fetch(preurl + url, {
			method: 'POST',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": tokenCheck(),
				"Year": time.getFullYear(),
				"Month": time.getMonth() + 1,
				"Day": time.getDate()
			},
			body: datas
		});
		
		return response.json();
	}
}

export async function getJSON(url, temp) {
	if (temp === 0) {
		const response = await fetch(preurl + url, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				"Authorization": tokenCheck()
			},
		})
			.catch(error => console.log('error', error));
		
		return response.json();
	}
	if (temp === 1) {
		let time = new Date();
		const response = await fetch(preurl + url, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				"Authorization": tokenCheck(),
				"Year": time.getFullYear(),
				"Month": time.getMonth() + 1,
				"Day": time.getDate()
			},
		})
			.catch(error => console.log('error', error));
		
		return response.json();
	}
}

export async function getRecycleBin(url, year, month, date) {
	const response = await fetch(preurl + url, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json;charset=utf-8",
			"Authorization": tokenCheck(),
			"Year": year,
			"Month": month,
			"Day": date
		},
	})
		.catch(error => console.log('error', error));
	
	return response.json();
}

export async function putData(url, data, temp) {
	if (temp === 0) {
		const response = await fetch(preurl + url + data, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				"Authorization": tokenCheck()
			},
			body: JSON.stringify(data)
		})
			.catch(error => console.log('error', error));
		
		return response.json();
	}
	if (temp === 1) {
		let time = new Date();
		const response = await fetch(preurl + url + data, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				"Authorization": tokenCheck(),
				"Year": time.getFullYear(),
				"Month": time.getMonth() + 1,
				"Day": time.getDate()
			},
			body: JSON.stringify(data)
		})
			.catch(error => console.log('error', error));
		
		return response.json();
	}
}

const time = new Date();
const year = time.getFullYear();
const month = time.getMonth() + 1 ;
const day = time.getDate();

export async function postDataa(url, data){
    tokenCheck();
    var urlencoded = new URLSearchParams();
    urlencoded.append("schedule", data.Content);
    urlencoded.append("SchId", data.SchId);
    const response = await fetch(preurl+url, {
        method: 'POST', 
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded" ,
            "Authorization": tokenCheck(),
            "Year":year,
            "Month":month,
            "Day":day,
            "Connection": "keep-alive"
        },
        body:urlencoded,
        redirect: 'follow'
    })

    return response.json();
}

export async function postCheck(url, data){
    var urlencoded = new URLSearchParams();
    urlencoded.append("SchId", data.SchId);
    tokenCheck();
    const response = await fetch(preurl+url, {
        method: 'POST', 
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": tokenCheck(),
            "Year":year,
            "Month":month,
            "Day":day
        },
        body: urlencoded
    })
        .catch(error => console.log('error', error));

    return response.json();
}

export async function getPhoto(url,data){
    tokenCheck();
    const response = await fetch(preurl+url, {
        method: 'GET', 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": tokenCheck(),
            "Year":data.year,
            "Month":data.month,
            "Day":data.day
        },
    })
        .catch(error => console.log('error', error));

    return response.json();
}

export async function postPhoto(url, data,time){
    tokenCheck();
    var formdata = new FormData();
    formdata.append("photo", data)
    const response = await fetch(preurl+url, {
        method: 'POST', 
        headers: { 
            "Authorization": tokenCheck(),
            "Year":time.year,
            "Month":time.month,
            "Day":time.day,
    	},
        body: formdata
    });

    return response.json();
}

export async function deleteAll(url){
    tokenCheck();
    const response = await fetch(preurl+url, {
        method: 'DELETE', 
        headers: { 
            "Authorization": tokenCheck(),
            "Year": time.getFullYear(),
			"Month": time.getMonth() + 1,
			"Day": time.getDate()
    	}
    });

    return response.json();
}