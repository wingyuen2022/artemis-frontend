// Commond function(s)

export const wait = async(second) => {
    return new Promise(resolve => setTimeout(resolve, second*1000));
};