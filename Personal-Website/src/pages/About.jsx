import { useEffect, useState } from "react"
import DOMPurify from 'dompurify';
import profile from '../Highlights/IMG_0883.jpg'


export default function About() {
    const [content, setContent] = useState('');
    const [sanitizedContent, setSanitizedContent] = useState('');
    const wordPressURL = 'https://public-api.wordpress.com/rest/v1.1/sites/taitemcgrady.wordpress.com/posts/48';

    const wordPressImport = useEffect(() => {
        const wordFetch = async () => {
            try {
                const response = await fetch(wordPressURL);
                const result = await response.json()
                setContent(result)
            } catch (error) {
                error(error)
            }
        }
        wordFetch();
        const _sanitized = DOMPurify.sanitize(content.content)
        setSanitizedContent(_sanitized)
        console.log(sanitizedContent)
    }, []);

    const wpContent = {__html: sanitizedContent}

    return (<div className="Page About">
        <img className="ProfilePhoto" src={profile} alt="a polaroid of myself" />
        <aside className="IconContainer">
            <img className="SkillIcon" src="/css3-alt.svg" alt="CSS icon"></img>
            <img className="SkillIcon" src="/html5.svg" alt="HTML5 icon"></img>
            <img className="SkillIcon" src="/js.svg" alt="JavaScript icon"></img>
            <img className="SkillIcon" src="/node-js.svg" alt="Node.js icon"></img>
            <img className="SkillIcon" src="/react.svg" alt="React icon"></img>
            <img className="SkillIcon" src="/github.svg" alt="GitHub icon"></img>
        </aside>
        <div
            className="ContentBox"
            dangerouslySetInnerHTML={wpContent}
        />
    </div>)
}