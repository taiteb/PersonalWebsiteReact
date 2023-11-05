import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function About() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/About.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="Page About">
        <img className="ProfilePhoto" src="/IMG_0883.jpg" alt="a polaroid of myself" />
        <aside className="IconContainer">
            <img className="SkillIcon" src="/css3-alt.svg" alt="CSS icon"></img>
            <img className="SkillIcon" src="/html5.svg"alt="HTML5 icon"></img>
            <img className="SkillIcon" src="/js.svg" alt="JavaScript icon"></img>
            <img className="SkillIcon" src="/node-js.svg" alt="Node.js icon"></img>
            <img className="SkillIcon" src="/react.svg" alt="React icon"></img>
            <img className="SkillIcon" src="/github.svg" alt="GitHub icon"></img>
        </aside>
        <div className="ContentBox">
            <ReactMarkdown children={content} />
        </div>
    </div>)
}