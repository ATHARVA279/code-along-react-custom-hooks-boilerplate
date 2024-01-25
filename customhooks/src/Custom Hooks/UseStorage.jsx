import React from 'react'

function UseStorage() {

    let setStorage = (val) =>{
        localStorage.setItem("data",val)
        sessionStorage.setItem("data",val)
    }
    return {setStorage}
}

export default UseStorage
