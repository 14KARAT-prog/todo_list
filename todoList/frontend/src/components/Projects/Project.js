import React from "react";

function Project({projects}) {

 return (
   <tr>
         <td>
            {projects.name}
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