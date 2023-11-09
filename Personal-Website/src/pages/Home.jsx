import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import pic2010 from '../Highlights/2010.png';
import pic4100 from '../Highlights/4100.png';
import pic3317 from '../Highlights/3317.png';
import pic26244 from '../Highlights/26244.png';

export default function Home() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/Home.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="Home">
        <div className="Identity">
            <h2>Full Stack Dev</h2>
            <h2>Digital Artist</h2>
            <h2>Music Geek</h2>
        </div>

        <div className="ContentBox">
            <h2>Generative Art Highlights</h2>
            <div className="ImageGallery">
                <img src={pic2010} alt="" />
                <img src={pic26244} alt="" />
                <img src={pic3317} alt="" />
                <img src={pic4100} alt="" />
            </div>
        </div>

        <aside>
            <div className="ContentBox">
                <ReactMarkdown children={content} />
            </div>
        </aside>

        <div className="Links">
            <a href="https://www.linkedin.com/in/taite-mcgrady/">
                <img className="LinkIcon" src="/linkedin.svg" alt="CSS icon"></img>
            </a>
            <a href="https://www.github.com/taiteb">
                <img className="LinkIcon" src="/github.svg" alt="CSS icon"></img>
            </a>
        </div>
    </div>)
}