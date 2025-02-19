import { useState, useEffect } from "react";

const useFetchProducts = () => {
    const [items, setItems] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true);

    const fetchData = async (api) => {
        try {
            const response = await fetch(api);
            const data = await response.json();

            setItems(data)
            setError(data.length == 0 ? "No Matching products found." : "")
        }
        catch (error) {
            setError("error occured in fetching data")
        }
        finally {
            setLoading(false)
        }
    }
    return { items, loading, setLoading, error, setError, fetchData }

}

export default useFetchProducts;