async function userLogin(email) {
    return new Promise((resolve, reject) => {
        fetch('/api/login/tourist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: email}),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    resolve(user);
                });
            } else {
                response.json()
                    .then((obj) => {  reject(obj); }) // error msg in the response body
                    .catch((err) => { reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
                }
        }).catch((err) => { reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}
async function uploadPhoto (id, file) {
    return new Promise((resolve, reject) => {

        fetch('/api/upload-profile-photo/' + id, {
            method: 'POST',
            body: file

        }).then((response) => {
            if (response.ok) {
                resolve(response.json());
                console.log("upload process is done successfully");
            } else {
                console.log('react api fault')
                reject({ status: response.status, msg: "You cannot upload..." })
            }
        }).catch((err) => { reject({ status: err.status, msg: "Network issues, try again later." }) }); // connection errors
    });
}

async function editProfile (data){
    return new Promise((resolve, reject) => {
        fetch('/api/edit', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data: data})
        }).then(res => {
            if(res.ok) {
                console.log("edited");
                resolve(res);
            } else {
                reject({ status: res.status, msg: "You cannot edit..." })
            }
        }).catch(err => {
            reject({ status: err.status, msg: "Network issues, try again later." })
        })
    }) 
}

async function getChats (userId){
    let response = await fetch('/api/get-chats/' + userId);
    let result = await response.json();

    if(response.ok){
        return result;
    } else{
        return [];
    }
}

async function getSingleChat (chatId){
    let response = await fetch('/api/get-chat/' + chatId);
    let result = await response.json();

    if(response.ok){
        return result;
    } else{
        return [];
    }
}

async function getGuide (id){
    let response = await fetch('/api/get-guide/' + id);
    let result = await response.json();

    if(response.ok){
        return result;
    } else{
        return null;
    }
}

async function getGuideList (city){
    let response = await fetch('/api/get-guide-list/' + city);
    let result = await response.json();

    if(response.ok){
        return result;
    } else{
        return null;
    }
}

async function getMyTrips (userId){
    let response = await fetch('/api/get-my-trips/' + userId);
    let result = await response.json();
    if(response.ok){
        return result;
    } else{
        return [];
    }
}

async function sendTripRequest(StartDate, EndDate,Guide,City,TouristCount,Status,user) {
    return new Promise((resolve, reject) => {
        fetch('/api/sendTripRequest/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({StartDate: StartDate, EndDate: EndDate,Guide: Guide, City: City,TouristCount: TouristCount, Status: Status, user: user})
        }).then((response) => {
            if (response.ok) {
                resolve(response.json());
            } else {
                // analyze the cause of error
                response.json()
                    .then((obj) => {  reject(obj); }) // error msg in the response body
                    .catch((err) => { reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
                }
        }).catch((err) => { reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
    }

const userMethods = {userLogin, sendTripRequest, uploadPhoto, getMyTrips, editProfile, getChats, getSingleChat, getGuide, getGuideList};

export default userMethods;