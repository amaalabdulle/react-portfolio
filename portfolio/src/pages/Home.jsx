import profileImage from "../images/profile.png";

function Home() {
    // styling for Home
    const homeStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5px',
        width: 'auto',
        height: '700px',
    };

    const imageStyle = {
        height: '500px',
    };
    const text1 = {
        fontFamily: 'Monospace',
    };
    const text2 = {
        fontFamily: 'serif',
    };

    return (
        // Home/About page: details about me
        <div style={homeStyle}>
            <h1 style={text1}>Front-End Web Developer</h1>
            <p style={text2}>I am a front end web developer who codes appealing and intuitive products.</p>
            <div>
                <img src={profileImage} style={imageStyle}/>
            </div>
            <h2 style={text1}>Welcome to my portfolio</h2>
        </div>
    );
}

export default Home;