import React from "react";
import { useParams } from 'react-router-dom';

function ProjectPage({ project, users }) {
    let { id }= useParams();
    let filtered_project = project.filter((item) => item.id === Number(id));
    return (
        <React.Fragment>
            { filtered_project.map((item) => {
                return (
                    <React.Fragment key={`${item.id}_${item.name}`}>
                        <h2>Проект {item.id}</h2>
                        <div>Project: { item.name }</div>
                        <div>Url project: <a href={item.url} target="_blank" rel="noopener noreferrer">{ item.url }</a></div>
                        <div>Project users: { item.users }</div>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default ProjectPage;