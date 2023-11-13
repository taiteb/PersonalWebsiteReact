import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function Recent() {
    const [content, setContent] = useState('');
    const [sanitizedContent, setSanitizedContent] = useState('');
    const wordPressURL = 'https://public-api.wordpress.com/rest/v1.1/sites/taitemcgrady.wordpress.com/posts/?category=Generative Art';

    const wordPressImport = useEffect(() => {
        const wordFetch = async () => {
            try {
                const response = await fetch(wordPressURL);
                const result = await response.json();
                setContent(result)
            } catch (error) {
                error(error)
            }
        }
        wordFetch();
        console.log(content)
        // const _sanitized = DOMPurify.sanitize(posts.posts)
        // setSanitizedContent(_sanitized)
        // console.log(sanitizedContent)
    }, []);

    // const wpContent = {__html: sanitizedContent}
    // console.log(content.posts[0].content)
    // console.log(content)


    return (
        <div className="ProjectShowcase">

            {!content ? <p>Loading...</p> : content.posts.map((post) => {
                const _sanitizedContent = DOMPurify.sanitize(post.content);
                const wpContent = { __html: _sanitizedContent };
                return (<div className="RecentPost">
                    <h2>{post.title}</h2>
                        <div className="ContentBox" dangerouslySetInnerHTML={wpContent}></div>
                    </div>)
            })
            }
            {/* <h2>Recent projects:</h2>
            <div className="ProjectDisplay" >
                <iframe src="https://taiteb.github.io/Half-Tone-Random-Walk/" frameborder="0"></iframe>
                <p>
                    This project is probably the most fun I've had so far with making something from just a few base principles.
                    I followed a tutorial on making a single random-walk generator, and from there I figured out how to turn it into a function I could call several times. I tweaked the color values, the size and spacing of the steps, and at a certain point it reminded me of the half-tone dots used in comics (and exaggerated by Roy Lichtenstein).
                    Half-tone masks are angled at either 15, 45, or 75 degrees, and I figured out how to rotate the cartesian coordinates (on an instance basis) by one of the mask angle values. While this isn't a faithful recreation of true half-tone, it's reminiscent of the effect- which is what I intended.
                </p>
            </div>
            <div className="ProjectDisplay">
                <iframe src="https://taiteb.github.io/8-24-23/" frameborder="0"></iframe>
                <p>
                    This is a fairly simple one. It's an array of dots (sized to fill a canvas with a healthy border) that oscillate in size 
                    based on a sine wave. Minimal coding, but a pretty effect. 
                </p>
            </div>
            <div className="ProjectDisplay">
                <iframe src="https://taiteb.github.io/maze-challenge/" frameborder="0"></iframe>
                <p>
                    This was modified following a tutorial I had done from the Coding Train (https://www.youtube.com/watch?v=HyK_Q5rrcr4&pp=ygUSY29kaW5nIHRyYWluIG1hemUg) based on a maze generation algorithm. 
                    I opted mainly to keep just the direction-finding elements, which randomly moved to an adjacent location that hadn't been visited before. 
                     kept previous locations in 
                </p>
            </div>
            <div className="ProjectDisplay">
                <iframe src="https://taiteb.github.io/Working-with-Agents/" frameborder="0"></iframe>
            </div> */}
        </div>)
}