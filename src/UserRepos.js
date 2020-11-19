import React from "react";
import Repo from "./Repo";

const UserRepos = ({data}) => (
   
    <div className="sticky">
        <h1 >Work </h1>
        <div id="repos">
            {data.map(el => (
                <Repo repo={el} key={el.id}/>
            ))}
        </div>
    </div>
)

export default UserRepos