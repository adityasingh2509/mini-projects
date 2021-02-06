const button = document.getElementById('id-button');
const audioElement = document.getElementById('audio');
const jokeTextBubble = document.getElementById('id-bubble');

function test() {
    VoiceRSS.speech({
        key: '502ec5ac89c84b0e929d5251d0bbd5b8',
        src: 'Hello, world!',
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

test();