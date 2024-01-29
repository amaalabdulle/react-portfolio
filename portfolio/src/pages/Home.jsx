import profileImage from "../images/profile.png";

function Home() {
    // Body
    const homeStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
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
        <div style={homeStyle}>
            <h1 style={text1}>Front-End Web Developer</h1>
            <p style={text2}>I design code lbesf,aglqrefsjnQG F LSBFWBFE</p>
            <div>
                <img src={profileImage} style={imageStyle}/>
            </div>
        </div>
    );
}

export default Home;