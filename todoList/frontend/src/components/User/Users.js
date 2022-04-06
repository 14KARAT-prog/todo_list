import React from "react";
import User from "./User";

function Users({users}) {
    return (
        <main>
            <table className="customTable">
                <caption>Таблица пользователей</caption>
                <thead>
                    <tr>
                        <th>
                            User name
                        </th>
                        <th>
                            First name
                        </th>
                        <th>
                            Last name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => <User
                    key={`${users.email}_${users.username}`}
                    users={users} 
                    />)}
                </tbody>
            </table>
        </main>
    )
}

export default Users