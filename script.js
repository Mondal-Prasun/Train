let audio3 = document.createElement('audio');
audio3.setAttribute('src', 'audio/train_effec.mp3');
audio3.loop= true;
audio3.play(); 
let bel = document.getElementById('bells');
bel.addEventListener('click', function fun() {
    bells.classList.add('ring');
    setTimeout(() => {
        bells.classList.remove('ring');
        road_use.classList.remove('roadRun')
        trainS.classList.remove('trainShake')
        wl1.classList.remove('wheelRun')
        wl2.classList.remove('wheelRun')
        wl3.classList.remove('wheelRun')
        wl4.classList.remove('wheelRun')
        wl5.classList.remove('wheelRun')
        wl6.classList.remove('wheelRun')
        if (!audio3.pause()){
            audio.pause();
        }
    }, 5000);
    let audio1 = document.createElement('audio');
    audio1.setAttribute('src', 'audio/train_bell.mp3')
    audio1.play();
}
);
let flag = document.getElementById('start');
function good(){
    let audio2 = document.createElement('audio');
    audio2.setAttribute('src', 'audio/train_start.mp3');
    audio2.play();
}
 flag.addEventListener('click', function fun2(){
    start.classList.add('blow')
    road_use.classList.add('train_start')
    trainS.classList.add('trainShake')
    wl1.classList.add('wheelRun')
    wl2.classList.add('wheelRun')
    wl3.classList.add('wheelRun')
    wl4.classList.add('wheelRun')
    wl5.classList.add('wheelRun')
    wl6.classList.add('wheelRun')
    good()
    setTimeout(() => {
        road_use.classList.remove('train_start')
        road_use.classList.add('roadRun')
        start.classList.remove('blow')
        if(!audio3.play()){
            audio3.play();
        }
    }, 15 * 1000);
 })