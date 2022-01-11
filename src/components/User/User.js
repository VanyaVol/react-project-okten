import "./User.css"

function User(
    {
        itemUser: {
            id,
            name,
            username,
            email,
            phone,
            website,
            address: {
                street,
                suite,
                city,
                zipcode,
                geo: {
                    lng,
                    lat
                }
            },
            company: {
                name: companyName,
                catchPhrase,
                bs
            }
        }
    }) {
    return (
        <div className={'user-block'}>
            <h3>ID: {id}</h3>
            <h4>Name: {name}</h4>
            <h5>Username: {username}</h5>
            <p>Phone: {phone}</p>
            <p>{website}</p>
            <p>{email}</p>
            <div className={'address'}>
                <p>Address:</p>
                <p>{zipcode}</p>
                <p>{suite}</p>
                <p>{city}</p>
                <p>{street}</p>
                <div className={'geo'}>
                    <p>{lng}, {lat}</p>
                </div>
            </div>

            <div className={'company'}>
                <p>Company: </p>
                <p>Name: {companyName}</p>
                <p>{bs}</p>
                <p>{catchPhrase}</p>
            </div>

        </div>
    );
}

export default User;