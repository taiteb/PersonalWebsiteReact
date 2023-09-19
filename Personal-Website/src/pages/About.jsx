import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function About() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/About.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="Page">
        <div className="ContentBox About">
            <ReactMarkdown children={content} />
        </div>
    </div>)
}