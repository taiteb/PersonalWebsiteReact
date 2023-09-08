export default function Recent() {
    return (<div className="ProjectShowcase">
        <h2>Recent projects:</h2>
        <div id="projectDisplay" >
            <iframe src="https://taiteb.github.io/Half-Tone-Random-Walk/" frameborder="0"></iframe>
            <p>
                This project is probably the most fun I've had so far with making something from just a few base principles. 
                I followed a tutorial on making a single random-walk generator, and from there I figured out how to turn it into a function I could call several times. I tweaked the color values, the size and spacing of the steps, and at a certain point it reminded me of the half-tone dots used in comics (and exaggerated by Roy Lichtenstein). 
                Half-tone masks are angled at either 15, 45, or 75 degrees, and I figured out how to rotate the cartesian coordinates (on an instance basis) by one of the mask angle values. While this isn't a faithful recreation of true half-tone, it's reminiscent of the effect- which is what I intended.
            </p>
        </div>
        <iframe src="https://taiteb.github.io/8-24-23/" frameborder="0"></iframe>
        <iframe src="https://taiteb.github.io/maze-challenge/" frameborder="0"></iframe>
        <iframe src="https://taiteb.github.io/Working-with-Agents/" frameborder="0"></iframe>
    </div>)
}