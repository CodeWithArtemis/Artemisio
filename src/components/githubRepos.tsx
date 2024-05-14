"use client"
import {useEffect,useState} from "react";
import axios from "axios";
import RepoCard from "./repo-card"; 
const Repositories = ()=>{
    const [repos,setRepos] = useState([])
   
useEffect(()=>{
    const fetchRepos = async () => {
        try {
            const response = await axios.get("https://api.github.com/users/CodeWithArtemis/repos?sort=updated&per_page=3");
            setRepos(response.data);
        } catch (error) {
            console.error("Error fetching repos:", error);
        }
    };
    fetchRepos();
}, []);

    return (

<div className="grid grid-cols-3 gap-4  min-h-[40vh]">

            {repos.map(repo =>
<RepoCard key={ repo.id as number} props={repo}/>
            )}
        </div>

    )
}
export default Repositories;