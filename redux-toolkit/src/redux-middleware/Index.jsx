import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Store";
import { asyncIncrementCount, fetchPostOffices } from "./thunk";
import { useEffect, useState } from "react";




const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(asyncIncrementCount)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Incement</button>
        </div>
    )

}


const CitySearch = () => {
    const [value, setValue] = useState("");
    const postOffices = useSelector((state) => state.city.info);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostOffices);
    }, []);


    return (
        <div>
            <input
                placeholder="Seacrh your city"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <ul>
                {postOffices?.filter((postOffice) => postOffice.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1).map((postOffice) => (<li>{postOffice.Name}</li>
                ))}

            </ul>
        </div>
    )
}

export const ReduxMiddleWare = () => {
    return (
        <Provider store={store}>
            <Counter />
            <CitySearch />
        </Provider>
    )
};