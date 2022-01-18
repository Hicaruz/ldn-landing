function getStatic(){
    const reference = localStorage.getItem("persist:static")
    if(reference){
        return JSON.parse(reference)
    }
    return {}
}

export default getStatic