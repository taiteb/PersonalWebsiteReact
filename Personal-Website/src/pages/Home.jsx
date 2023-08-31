import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function Home() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/Home.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="TextFill">
        <ReactMarkdown children={content} />
    </div>)
}