import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
const App = () =>
{

  const userData = [
    { id: 1, name: 'Jitendra', username: 'TheMonk' },
    { id: 2, name: 'Meghraj', username: 'immorec' },
    { id: 3, name: 'Kajal', username: 'suzain' },
    { id: 4, name: 'Maya', username: 'mybabe' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(userData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(initialFormState)


  //CRUD operations

  const addUser = (user) =>
  {
    user.id = users.length + 1
    setUsers([...users, user]);
  }

  const deleteUser = (id) =>
  {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) =>
  {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updateUser) =>
  {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD APP with HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser} />
            </>
          )
            :
            (
              <>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser} />
              </>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
};

export default App;
