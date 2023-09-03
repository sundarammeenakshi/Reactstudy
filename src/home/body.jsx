const Body = ({ user }) => {
    return (
        <>
            {
                user.map((userdetails, index) => {
                    const { email, passw } = userdetails;
                    return (
                        <>
                            <tr key={index}></tr>
                            <td>{index + 1}</td>
                            <td>{email}</td>
                            <td>{passw}</td>
                        </>
                    )
                })
            }
        </>
    )
}

export default Body;