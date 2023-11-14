export default function Contact() {
    return (<div className="BusinessCard">
        <h1 className="Title">Contact Me!</h1>
        <div className="ContentBox">
            <ul>
                <li className="Links">
                    <img className="LinkIcon" src="/mail.svg" alt="Mail icon"></img>
                    <p>taitemcg@gmail.com</p>
                </li>
                <li className="Links">
                    <a href="https://www.linkedin.com/in/taite-mcgrady/">
                        <img className="LinkIcon" src="/linkedin.svg" alt="LinkedIn icon"></img>
                    </a>
                    <p>Taite McGrady</p>
                </li>
                <li className="Links">
                    <a href="https://www.github.com/taiteb">
                        <img className="LinkIcon" src="/github.svg" alt="GitHub icon"></img>
                    </a>
                    <p>Taiteb</p>
                </li>
            </ul>

        </div>
    </div>)
}