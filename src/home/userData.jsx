const UserData=({users})=>{
return(
    <>
    {
        users.map((curuser)=>{
           const {id,name,email}=curuser;

           return(
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                </tr>
           )
        })
    }
    </>
)
}

export default UserData;