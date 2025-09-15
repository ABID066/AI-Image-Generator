import {useEffect, useState} from "react";


const UseModel = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [models, setModels] = useState("");

    useEffect(() => {
        async function fetchModel() {
            try {
                const response = await fetch("https://image.pollinations.ai/models")
                if(!response.ok) {
                    throw new Error("Failed to fetch models");
                }
                const data = await response.json();
                setModels(data);
                console.log(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        fetchModel()
    }, []);

    return {models, loading, error}
};

export default UseModel;