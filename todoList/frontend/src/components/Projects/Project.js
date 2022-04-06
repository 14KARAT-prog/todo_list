import React from "react";
import { Link } from 'react-router-dom';

function Project({projects}) {
 return (
   <tr>
         <td>
            <Link to={`/projects/${projects.id}`}>{projects.name}</Link>
         </td>
         <td>
            {projects.url}
         </td>
         <td>
            {projects.users}
         </td>
   </tr>
 )
}

export default Project