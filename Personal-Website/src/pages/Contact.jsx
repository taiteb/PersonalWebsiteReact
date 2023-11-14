export default function Contact() {
    return (<div className="BusinessCard">
        <h1 className="Title">Contact Me!</h1>
        <div className="ContentBox">
            <ul>
                <li className="Links">
                    <a>
                        <img className="LinkIcon" src="/mail.svg" alt="Mail icon"></img>
                    </a>
                    <p>taitemcg@gmail.com</p>
                </li>
                <li className="Links">
                    <a href="https://www.linkedin.com/in/taite-mcgrady/">
                        <img className="LinkIcon" src="/linkedin.svg" alt="LinkedIn icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/taite-mcgrady/">Taite McGrady</a>
                </li>
                <li className="Links">
                    <a href="https://www.github.com/taiteb">
                        <img className="LinkIcon" src="/github.svg" alt="GitHub icon"></img>
                    </a>
                    <a href="https://www.github.com/taiteb">Taiteb</a>
                </li>
            </ul>

        </div>
    </div>)
}