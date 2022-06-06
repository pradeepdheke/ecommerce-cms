import { postUser } from '../../helpers/axiosHelper';
import {isPending, responseResolved} from './signInUpSlice';
import {  toast } from 'react-toastify';
 

export const postUserAction = user => async dispatch => {
    dispatch(isPending());

    // call axio helper to call api

console.log(user)

const promiseData =  postUser(user)
toast.promise(promiseData, {
    pending: "Please Waitt ...",
    
})
const data = await promiseData


toast[data.status](data.message)
dispatch(responseResolved(data))

 }
   