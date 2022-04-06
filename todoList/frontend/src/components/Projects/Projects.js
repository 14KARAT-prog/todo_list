import React from "react"
import Project from './Project';


function Projects({projects}) {
    return (
        <main>
            <table className="customTable">
                <caption>Таблица пользователей</caption>
                <thead>
                    <tr>
                        <th>
                            Project name
                        </th>
                        <th>
                            Url
                        </th>
                        <th>
                            Users
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((projects) => <Project
                    key={`${projects.id}_${projects.name}`}
                    projects={projects}
                    />)}
                </tbody>
            </table>
        </main>
    )
}

export default Projects