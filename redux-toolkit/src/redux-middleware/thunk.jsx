const delay = ()=> new Promise((r)=> setTimeout(r, 1000))


// middleawre asyncincrementCount
export  const  asyncIncrementCount = async(dispatch, getState)=>{ 
    await delay(); 
    console.log(getState());
    dispatch({type: "inc", payload : 4});
};

export async function fetchPostOffices(dispatch, getState){ 
    try{ 
        const resposne = await  fetch("https://api.postalpincode.in/pincode/151001");
        const data = await resposne.json(); 
        dispatch({type : "fetched_data" , payload : data[0].PostOffice});
    } catch(error){ 

    }
}
