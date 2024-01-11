import { imageTrack, body } from './domSelector';

let downPosition = 0;
let currentDistance = 0;

body.addEventListener("mousedown", (e) => {
    downPosition = e.clientX;
});

body.addEventListener("mouseup", (e) => {
    downPosition = 0;
});

body.addEventListener("mousemove", (e) => {
    if (downPosition === 0) { 
        return 
    }
    let maxChange = window.innerWidth / 2;
    let currentChange = downPosition - e.clientX
    let percentage = (currentChange / maxChange);
    let distance = (imageTrack.offsetWidth - window.innerWidth) * percentage;
    if ((currentDistance + distance) < (imageTrack.offsetWidth / 2.075) && (currentDistance + distance) > 0) {
        currentDistance += distance;
        moveImageTrack(currentDistance);
    }
    console.log(currentDistance);
});

const moveImageTrack = (distance) => {
    imageTrack.animate([
        {transform: `translate(-${distance}px, 0)`}
    ], {duration: 2500, fill: 'forwards'});
};
