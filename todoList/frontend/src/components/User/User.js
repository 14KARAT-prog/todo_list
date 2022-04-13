import React from "react";

function User({users}) {

 return (
   <tr>
         <td>
            {users.username}
         </td>
         <td>
            {users.firstName}
         </td>
         <td>
            {users.lastName}
         </td>
         <td>
            {users.email}
         </td>
   </tr>
 )
}

export default User