import WelcomMessage from "../components/WelcomeMessage";

function AboutUs() {
    const name = "Phoenix"; // Replace this with any name you'd like.
    return (
        <div>
            <h1>About Us</h1>
            <WelcomMessage message={`Hello, ${name}!`} />
        </div>
    );
}

export default AboutUs;
