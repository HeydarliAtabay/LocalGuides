async function uploadPhoto(id, file) {
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

const userMethods = {uploadPhoto, editProfile}

export default userMethods;