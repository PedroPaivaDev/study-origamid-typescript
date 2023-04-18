const video = document.querySelector('video'); // HTMLVideoElement
const videoID = document.querySelector('#videoPrincipal'); // HTMLElement

const link1 = document.querySelector('a'); // HTMLAnchorElement
const link2 = document.querySelector('#origamid'); // Element

video?.volume;
// videoID?.volume; // erro no ts
if(videoID instanceof HTMLVideoElement) console.log(videoID?.volume)

link1?.href;
// link2?.href; // erro no ts