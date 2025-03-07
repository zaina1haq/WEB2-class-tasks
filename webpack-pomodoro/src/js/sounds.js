import buttonSoundFile from '../assets/button-sound.mp3';
import breakSoundFile from '../assets/break.mp3';
import workSoundFile from '../assets/backtowork.mp3';

export const buttonSound = new Audio(buttonSoundFile);
export const breakSound = new Audio(breakSoundFile);
export const workSound = new Audio(workSoundFile);

export function playSound(type) {
    if (type === 'button') buttonSound.play();
    else if (type === 'break') breakSound.play();
    else if (type === 'work') workSound.play();
}
