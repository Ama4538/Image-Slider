import { images, body } from './domSelector';

body.addEventListener('mousemove', (e) => {
    let xPercent = (e.clientX / window.innerWidth) * 100;
    panImage(xPercent);
});

const panImage = (xPercent) => {
    images.forEach((image) => {
        image.animate([
            {backgroundPositionX: `${xPercent}%`}
        ], {duration: 20000, fill: "forwards", easing: "ease-in-out"});
    });
};

images.forEach((image) => {
    image.addEventListener("mouseenter", (e) => {
        blurAll(images);
        e.target.dataset.blur = "false"
    });
    image.addEventListener("mouseleave", (e) => {
        unblurAll(images);
    });
});

const blurAll = (images) => {
    images.forEach((image) => {
        image.dataset.blur = "true"
    });
};

const unblurAll = (images) => {
    images.forEach((image) => {
        image.dataset.blur = "false"
    });
};