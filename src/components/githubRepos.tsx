"use client"
import {useEffect,useState} from "react";
import axios from "axios";
import RepoCard from "./repo-card"; 
const Repositories = ()=>{
   interface Repo{
    name:string,
    description:string,
    html_url:string,
    language:string,
   }
    const [repos,setRepos] = useState<Repo[]>([]);
   
useEffect(()=>{
    const fetchRepos = async () => {
        try {
            const response = await axios.get<Repo[]>("https://api.github.com/users/CodeWithArtemis/repos?sort=updated&per_page=3");
            setRepos(response.data);
        } catch (error) {
            console.error("Error fetching repos:", error);
        }
    };
    fetchRepos();
}, []);

    return (

<div className="grid grid-cols-3 gap-4  min-h-[40vh]">
{repos.length > 0 ? (
                repos.map((repo,index) =>
                    <RepoCard  key={index} props={repo}/> 
                )
            ) : (
                <div className="flex flex-col items-center mx-auto justify-center h-full">
                    <h1 className="text-gray-700 text-2xl font-bold">Loading Repositories...</h1>
                </div>
            )}
        </div>

    )
}
export default Repositories;