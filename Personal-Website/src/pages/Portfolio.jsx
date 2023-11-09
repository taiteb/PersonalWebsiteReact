import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function About() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/Portfolio.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div>
        <h1>Portfolio</h1>
        <div className="ContentBox">
            <ReactMarkdown children={content} />
        </div>
    </div>)
}