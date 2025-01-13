import axios from "axios";
import { useEffect } from "react";

const AxiosExample = () => {
    const fetchResponseData = async () => {
      const response =   await axios({
            url: `https://api.postalpincode.in/pincode/${151003}`,
            method: "GET",
        });
        console.log(response);
    }

    useEffect(() => {
        fetchResponseData()
    }, []);
    return null;
}
/**
 * fetch method 
 * const response = await fetch();
 * const data = await reponse.json();
 * 
 * 
 * axios => request/response handling is easy 
 * 
 */

// axios();
// axios.get() => get request
// axios,post()=> post request
// axios.get() => delete request


export default AxiosExample;