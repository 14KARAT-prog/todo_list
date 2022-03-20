import React from "react";

function User({users}) {

 return (
   <tr>
         <td>
            {users.username}
         </td>
         <td>
            {users.first_name}
         </td>
         <td>
            {users.last_name}
         </td>
         <td>
            {users.email}
         </td>
   </tr>
 )
}

export default User