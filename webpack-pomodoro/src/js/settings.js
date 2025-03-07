import { timer, switchMode } from './timer.js';

export function setupSettings(document) {
    const pomodoroLength = document.getElementById('pomodoro-length');
    const shortBreakLength = document.getElementById('short-break-length');
    const longBreakLength = document.getElementById('long-break-length');

    document.getElementById('pomodoro-increment').addEventListener('click', () => {
        const value = parseInt(pomodoroLength.textContent);
        if (value < 60) {
            pomodoroLength.textContent = value + 1;
            timer.pomodoro = value + 1;
            if (timer.mode === 'pomodoro') switchMode('pomodoro', timer, document);
        }
    });

    document.getElementById('pomodoro-decrement').addEventListener('click', () => {
        const value = parseInt(pomodoroLength.textContent);
        if (value > 1) {
            pomodoroLength.textContent = value - 1;
            timer.pomodoro = value - 1;
            if (timer.mode === 'pomodoro') switchMode('pomodoro', timer, document);
        }
    });

    document.getElementById('short-break-increment').addEventListener('click', () => {
        const value = parseInt(shortBreakLength.textContent);
        if (value < 60) {
            shortBreakLength.textContent = value + 1;
            timer.shortBreak = value + 1;
            if (timer.mode === 'shortBreak') switchMode('shortBreak', timer, document);
        }
    });

    document.getElementById('short-break-decrement').addEventListener('click', () => {
        const value = parseInt(shortBreakLength.textContent);
        if (value > 1) {
            shortBreakLength.textContent = value - 1;
            timer.shortBreak = value - 1;
            if (timer.mode === 'shortBreak') switchMode('shortBreak', timer, document);
        }
    });

    document.getElementById('long-break-increment').addEventListener('click', () => {
        const value = parseInt(longBreakLength.textContent);
        if (value < 60) {
            longBreakLength.textContent = value + 1;
            timer.longBreak = value + 1;
            if (timer.mode === 'longBreak') switchMode('longBreak', timer, document);
        }
    });

    document.getElementById('long-break-decrement').addEventListener('click', () => {
        const value = parseInt(longBreakLength.textContent);
        if (value > 1) {
            longBreakLength.textContent = value - 1;
            timer.longBreak = value - 1;
            if (timer.mode === 'longBreak') switchMode('longBreak', timer, document);
        }
    });
}