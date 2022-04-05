import React from "react";
import Todo from './Todo';


function Todos({todos}) {
    return (
        <table className="customTable">
            <caption>Таблица пользователей</caption>
            <thead>
                <tr>
                    <th>
                        Text
                    </th>
                    <th>
                        Create date
                    </th>
                    <th>
                        Active
                    </th>
                    <th>
                        Project
                    </th>
                    <th>
                        User
                    </th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todos) => <Todo
                key={`${todos.id}_${todos.createDate}`}
                todos={todos}
                />)}
            </tbody>
        </table>
    )
}

export default Todos