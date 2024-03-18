import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import pic2010 from '../Highlights/2010.png';
import pic4100 from '../Highlights/4100.png';
import pic3317 from '../Highlights/3317.png';
import pic26244 from '../Highlights/26244.png';
import Contact from "./Contact";

export default function Home() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/Home.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (<div className="Home">
        <div className="Identity">
            <h2>Full Stack Dev</h2>
            <h2>Digital Artist</h2>
            <h2>Music Geek</h2>
        </div>

        <div className="MainPage">
            <div className="GenArtHighlight">
                <h2 className="Title">Generative Art Highlights</h2>
                <div className="ContentBox">
                    <div className="ImageGallery">
                        <img src='https://taitemcgrady.files.wordpress.com/2024/03/img_0295.png' alt="" />
                        <img src='https://taitemcgrady.files.wordpress.com/2023/12/truchet20.png' alt="" />
                        <img src='https://taitemcgrady.files.wordpress.com/2023/11/8440.png' alt="" />
                        <iframe src="https://taiteb.github.io/8-24-23/" scrolling='no' width='100%' height='100%' ></iframe>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    </div>)
}