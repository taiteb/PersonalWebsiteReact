import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function Recent() {
    const [content, setContent] = useState('');
    const wordPressURL = 'https://public-api.wordpress.com/rest/v1.1/sites/taitemcgrady.wordpress.com/posts/?category=Generative Art';

    const wordPressImport = useEffect(() => {
        // Fetches from URL above, which has a filter for my WP site's 'Gen Art' category
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
    }, []);


    return (
        <div className="ProjectShowcase">
            {/* Checks if fetch is complete, then maps the "posts" list for individual posts */}
            {/* WP returns these posts as html. They are sanitized on the off chance something gets through */}
            {/* The title is returned as a string and doesn't need sanitizing */}
            {/* Sanitized posts are then dangerouslyset */}
            {!content ? <p>Loading...</p> : content.posts.map((post) => {
                const _sanitizedContent = DOMPurify.sanitize(post.content);
                const wpContent = { __html: _sanitizedContent };
                return (<div className="RecentPost">
                    <h2 className="Title">{post.title}</h2>
                    <div className="ContentBox" dangerouslySetInnerHTML={wpContent}></div>
                </div>)
            })
            }
        </div>)
}