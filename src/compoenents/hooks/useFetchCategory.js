import { useState, useEffect } from "react";
import { categoryApi } from "../constants";

const useFetchCategory = () => {
    const [categoryList, setCategoryList] = useState(null)
    useEffect(() => {
        async function fetchCategory() {
            const response = await fetch(categoryApi);
            const category = await response.json();
            setCategoryList(category);
        }
        fetchCategory()
    }, [])
    return categoryList
}
export default useFetchCategory;