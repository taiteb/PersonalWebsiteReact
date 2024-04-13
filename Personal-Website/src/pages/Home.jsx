import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import pic2010 from '../Highlights/2010.png';
import pic4100 from '../Highlights/4100.png';
import pic3317 from '../Highlights/3317.png';
import pic26244 from '../Highlights/26244.png';
import Contact from "./Contact";

export default function Home({handleScroll}) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/Home.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="Home" >
        <h2 className="Identity">
            <span>Full Stack Dev</span>
            <br />
            <span>Digital Artist</span>
            <br />
            <span>Music Geek</span>
        </h2>

        <div className="MainPage">
            <div className="GenArtHighlight">
                <h2 className="Title">Generative Art Highlights</h2>
                <div className="ContentBox">
                    <div className="ImageGallery">
                        <img src='https://taitemcgrady.files.wordpress.com/2024/03/img_0295.png?w=1024' alt="Highlighted Generative Image 1" loading="lazy"/>
                        <img src='https://taitemcgrady.files.wordpress.com/2023/12/truchet20.png?w=1024' alt="Highlighted Generative Image 2" loading="lazy"/>
                        <img src='https://taitemcgrady.files.wordpress.com/2023/11/8440.png?w=1024' alt="Highlighted Generative Image 3" loading="lazy"/>
                        <iframe src="https://taiteb.github.io/8-24-23/" scrolling='no' width='100%' height='100%' alt="Highlighted Generative live render" defer></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}