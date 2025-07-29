import { getGreeting } from "../utils/greet";

function ProfileCard() {
    const greeting = getGreeting();

    return (
        <div style={{ border: "7px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
            <h2>{greeting}, Arnold!</h2>
            <p>I'm Learning React🚀</p>
        </div>
    );
}

export default ProfileCard