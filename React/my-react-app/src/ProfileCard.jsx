const ProfileCard = (props) => {
    return (
        <div style={{border: "1px solid gray", padding: "10px", margin: '10px'}}>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Role: {props.role}</p>
        </div>
    );
};

export default ProfileCard;