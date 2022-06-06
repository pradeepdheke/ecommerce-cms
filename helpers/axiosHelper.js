import axios from 'axios'

const rootUrlAPI = "http://localhost:8000/api/v1"
const adminEP = rootUrlAPI + "/admin"

export const postUser = async (UsrObj) => {
    try {
        const {data} = await axios.post(adminEP, UsrObj)
        return data
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            message: error.message,
        }
    }
}

export const postEmailVerification = async (obj) => {
    try {
        const {data} = await axios.post(adminEP + '/email-verification', obj)
        return data
    } catch (error){
        console.log(error)
        return {
            status: "error",
            message: error.message
        }
    }
}