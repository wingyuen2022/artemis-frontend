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