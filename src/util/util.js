// Commond function(s)

export const wait = async(second) => {
    return new Promise(resolve => setTimeout(resolve, second*1000));
};

export const openWeatherAPI = async(type, lat, long) => {
    return new Promise((resolve, reject) => {
        let domain = `https://artemis-camping-backend.herokuapp.com/api/`;
        //let domain = `http://127.0.0.1:8000/api/`;
        let url = domain + `${type}/lat=${lat}&long=${long}`;
        fetch(url).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
};

export const getMethodBackendAPI = async(path) => {
    return new Promise((resolve, reject) => {
        let domain = `https://artemis-camping-backend.herokuapp.com/api/`;
        //let domain = `http://127.0.0.1:8000/api/`;
        let url = domain + `trip/` + path;
        fetch(url).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
};

export const postMethodBackendAPI = async(path, jsonObject) => {
    return new Promise((resolve, reject) => {
        let domain = `https://artemis-camping-backend.herokuapp.com/api/`;
        //let domain = `http://127.0.0.1:8000/api/`;
        let url = domain + `trip/` + path;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(jsonObject)}
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
};

export const putMethodBackendAPI = async(path, jsonObject) => {
    return new Promise((resolve, reject) => {
        let domain = `https://artemis-camping-backend.herokuapp.com/api/`;
        //let domain = `http://127.0.0.1:8000/api/`;
        let url = domain + `trip/` + path;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(jsonObject)}
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
};

export const deleteMethodBackendAPI = async(path) => {
    return new Promise((resolve, reject) => {
        let domain = `https://artemis-camping-backend.herokuapp.com/api/`;
        //let domain = `http://127.0.0.1:8000/api/`;
        let url = domain + `trip/` + path;
        fetch(url, {
            method: 'DELETE'}
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
};