import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function About() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/About.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="TextFill">
        <ReactMarkdown children={content} />
    </div>)
}