const TimeMin = document.querySelector(".time-min");
const TimeSec = document.querySelector(".time-sec");
const ButtonMin = document.querySelector(".btn-min");
const ButtonSec = document.querySelector(".btn-sec");
const TimerMinutes = document.querySelector(".minutes");
const TimerSeconds = document.querySelector(".seconds");

ButtonMin.addEventListener("click", () => {
    let InputValue = TimeMin.value;
    let MintoSec = Math.floor(InputValue) * 60;
    MainWork(MintoSec);
});
ButtonSec.addEventListener("click", () => {
    let InputValue = TimeSec.value;
    let MintoSec = Math.floor(InputValue);
    MainWork(MintoSec);
});

function MainWork(MintoSec) {
    TimeMin.disabled = true;
    TimeSec.disabled = true;
    ButtonMin.style.pointerEvents = "none";
    ButtonSec.style.pointerEvents = "none";
    function CountDown() {
        let MinSec = MinSecCalcu(MintoSec);
        MintoSec--;
        let Secs = MinSec.Sec;
        let Mins = MinSec.Min;
        if (MintoSec < 0) {
            TimeMin.disabled = false;
            TimeSec.disabled = false;
            ButtonMin.style.pointerEvents = "all";
            ButtonSec.style.pointerEvents = "all";
            TimeMin.value = "";
            TimeSec.value = "";
            clearInterval(Inturvel);
        }
        TimerMinutes.innerHTML = `${Mins}`;
        TimerSeconds.innerHTML = `${Secs}`;
    }
    let Inturvel = setInterval(CountDown, 1000);
    CountDown();
}
function MinSecCalcu(a) {
    let Sec = a % 60;
    let Min = Math.floor(a / 60);
    if (Sec < 10) Sec = "0" + Sec;
    if (Min < 10) Min = "0" + Min;
    return {
        Min,
        Sec,
    };
}
