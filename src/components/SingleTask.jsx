import axios from "axios";
import React, {use, useEffect, useState} from "react"
import TaskCard from "./TaskCard";
import { useParams } from "react-router";
import './SingleTask.css'

const SingleTask = (props) => {
    const {tasks} = props;
    console.log("This is tasks state-->", tasks)
    const params = useParams();
    const id = Number(params.id);

    const [currentTask, setCurrentTask] = useState([]);
    const [currentUserId, setCurrentuserId] = useState([]);
    const [user, setUser] = useState([]);
    let userId = Number(currentUserId)
    // console.log("Current user-->", currentUser)

    const fetchTaskById = async () => {
        try {
             const response = await axios.get(`http://localhost:8080/api/tasks/${id}`);
            setCurrentTask(response.data)
            const user = response.data.userId;
            setCurrentuserId(user)
        } catch(error) {
            console.log("failed to fetch task by id", error)
        }
    }
    
    useEffect(() => {
        fetchTaskById();
    }, [id]);

    const fetchUserByID = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
            setUser(response.data)
        } catch(error) {
            console.log("failed to fetch user by id", error)
        }
    }
    
    useEffect(() => {
        fetchUserByID();
    },[currentUserId]);


    return (
        <main>
            <h1 className="user-name">{user.name}</h1>
            <TaskCard task = {currentTask} fetchAllTasks={() => {}}/>
        </main>
    )
};

export default SingleTask;