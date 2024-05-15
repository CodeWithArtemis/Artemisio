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
    }
    void fetchRepos(); // Make sure to handle the promise here
}, []);

    return (
<div>
{repos.length > 0 ? (
<div className="grid grid-cols-3 gap-4  min-h-[40vh]">

                {repos.map((repo,index) =>
                    <RepoCard  key={index} props={repo}/> 
                )}
        </div>

            ) : (
                <div className="justify-center flex items-center mx-auto my-auto h-full min-h-[40vh]">
                    <h1 className="text-accent-foreground dark:text-primary items-center justify-center text-2xl ">Loading Repositories...</h1>
                </div>
            )}
</div>


    )
}
export default Repositories;