import Repositories from './githubRepos'
import Link from 'next/link'
const latestRepositories = () => {
  return (
    <div>
<div className=" py-2 flex justify-between items-center">
        <span className="text-2xl font-bold">Latest Repositories </span>
        <Link href="https://github.com/CodeWithArtemis" className="text-primary hover:text-mauve">
        See More..
        </Link>
        {/* Projects */}       
</div>
<Repositories/>

    </div>



)
}

export default latestRepositories
