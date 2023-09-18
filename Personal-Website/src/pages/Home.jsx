import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function Home() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/Home.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="Home">
        <aside>
            <ReactMarkdown children={content} />
        </aside>

        <div className="ContentBox">
            <h2 className="textfill">Generative Art Highlights:</h2>
            <div className="ImageGallery">
                <img src="/2010.png" alt="" />
                <img src="/4100.png" alt="" />
                <img src="/6183.png" alt="" />
                <img src="/18815.png" alt="" />
            </div>
        </div>
    </div>)
}