import React from "react";

function Todo({todos}) {

   const RenderActive = ({props}) => {
      if (props.active) {
         return (
            <td>Активный</td>
         )
      } else {
         return (
            <td>Не активный</td>
         )
      }
   }
 return (
   <tr>
         <td>
            {todos.text}
         </td>
         <td>
            {todos.createDate.slice(0, 10)}
         </td>
         <RenderActive props={todos} />
         <td>
            {todos.project}
         </td>
         <td>
            {todos.user}
         </td>
   </tr>
 )
}


export default Todo