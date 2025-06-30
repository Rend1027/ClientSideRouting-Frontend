import axios from "axios";
import React, {useEffect} from "react"
import { useParams } from "react-router";

const SingleTask = () => {
    const params = useParams();
    const id = Number(params.id);

    const fetchTaskById = async () => {
        try {
            await axios.get(`http://localhost:8080/api/tasks/${task.id}`);
            const task = response.data
        } catch (error) {
            console.log("Failed to fetch task by id", error)
        }
    }
    useEffect(() => {
        fetchTaskById();
    }, []);

    return (
        <main>
            
        </main>
    )
};

export default SingleTask;