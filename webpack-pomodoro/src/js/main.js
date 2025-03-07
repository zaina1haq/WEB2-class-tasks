import { timer, getRemainingTime, updateClock, switchMode } from './timer.js';
import { setupSettings } from './settings.js';
import { setupTasks } from './tasks.js';
import '../css/styles.css';  // إضافة استيراد ملف الستايل

let interval;
let isRunning = false;  // إضافة متغير للتحكم بحالة المؤقت

const mainButton = document.getElementById('js-btn');

mainButton.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
        isRunning = true;
    } else {
        stopTimer();
        isRunning = false;
    }
});

function startTimer() {
    if (!timer.remainingTime) {
        switchMode(timer.mode || 'pomodoro', timer, document);
    }
    
    let { total } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;

    if (timer.mode === 'pomodoro') timer.sessions++;

    mainButton.textContent = 'Stop';
    mainButton.classList.add('active');

    interval = setInterval(function () {
        timer.remainingTime = getRemainingTime(endTime);
        updateClock(timer, document);

        total = timer.remainingTime.total;
        if (total <= 0) {
            clearInterval(interval);
            isRunning = false;

            switch (timer.mode) {
                case 'pomodoro':
                    if (timer.sessions % timer.longBreakInterval === 0) {
                        switchMode('longBreak', timer, document);
                    } else {
                        switchMode('shortBreak', timer, document);
                    }
                    break;
                default:
                    switchMode('pomodoro', timer, document);
            }

            if (Notification.permission === 'granted') {
                const text = timer.mode === 'pomodoro' ? 'Get back to work!' : 'Take a break!';
                new Notification(text);
            }

            document.querySelector(`[data-sound="${timer.mode}"]`).play();
            
            // Remove automatic start
            mainButton.textContent = 'Start';
            mainButton.classList.remove('active');
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);

    mainButton.textContent = 'Start';
    mainButton.classList.remove('active');
}

const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

function handleMode(event) {
    const { mode } = event.target.dataset;

    if (!mode) return;

    // Reset timer state before switching mode
    clearInterval(interval);
    isRunning = false;

    // Switch mode and update UI
    switchMode(mode, timer, document);
    mainButton.textContent = 'Start';
    mainButton.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    if ('Notification' in window) {
        if (
            Notification.permission !== 'granted' &&
            Notification.permission !== 'denied'
        ) {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    new Notification('Awesome! You will be notified at the start of each session');
                }
            });
        }
    }

    setupSettings(document);
    setupTasks(document);
    switchMode('pomodoro', timer, document); // This should initialize timer.remainingTime
});