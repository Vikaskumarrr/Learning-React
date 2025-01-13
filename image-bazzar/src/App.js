import axios from "axios";
import { ImagesList } from "./components/ImagesList";
import { Pagination } from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import "./styles/app.scss";
import { useEffect, useState } from "react";
import { Button, Spin } from "antd";


const App = () => {
    const [apiStatus, setApiStatus] = useState("init");
    const [pageNumber, setPageNumber] = useState(1);
    const [query, setQuery] = useState("javascript");
    const [data, setData] = useState(null);

    const isLoading = apiStatus === "pending" || apiStatus === "init"

    const fetchImages = async () => {

        try {
            setApiStatus("pending");
            const response = await axios({
                url: "https://api.unsplash.com/search/photos?",
                method: "GET",
                params: {
                    page: pageNumber,
                    query,
                    client_id: "6YXNHArV-pApjJMPnTDs5O-Sxtjmt3opb_RiY5hXG7U"

                },
            });
            setApiStatus("success");
            setData(response.data);
        } catch (error) {
            setApiStatus("error");
            alert("Something wnet wrong");

        }
    }

    const updateQuery = (newQuery) => {
        setQuery(newQuery);
        setPageNumber(1)
    }

    useEffect(() => {
        if (query && pageNumber >= 1) {
            fetchImages();
        }
    }, [query, pageNumber]);


    return (
        <div className="container">
            < SearchBar
                updateQuery={updateQuery}
                defualtValue={query}
            />
            <div className="image-list"> 
            {
                isLoading ?
                    (< Spin />) : apiStatus === "error" ?
                        (<Button onClick={fetchImages}>Retry</Button>) :
                        (< ImagesList data={data}
                        />)
            }
            </div>
            < Pagination
                totalPages={data?.total_pages}
                activePage={pageNumber}
                setPageNumber={setPageNumber}
                isLoading={isLoading}
            />
        </div>
    )
}

export default App;


//seachBar | image | pegination
// Html 