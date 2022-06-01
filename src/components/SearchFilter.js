import React from 'react'
import './searchFilter.css'
import {Users} from './Users'

const SearchFilter = () => {
    const [search, setSearch] = React.useState('');

  return (
    <div className='container'>
        <input type="text" placeholder="Search..." className='search' onChange={(e) => setSearch(e.target.value)} />
        <div><br /><br /></div>
        <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
            {Users.filter((user) =>
            user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
            ).map(user => (
                <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
            </tr>
                ))}
                </tbody>
            </table>



    </div>
  )
}

export default SearchFilter