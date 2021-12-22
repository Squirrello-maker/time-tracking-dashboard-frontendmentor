class ActivityHandler
{
    constructor()
    {
        this.hours = document.querySelectorAll('.card__content__hours-box');
        this.previousTime = document.querySelectorAll('.card__content__previous-stat');
    }
    dailyActivity()
    {
        fetch('https://raw.githubusercontent.com/Squirrello-maker/time-tracking-dashboard-frontendmentor/main/src/JSON/data.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data[1]);
            this.hours.forEach((element, index) => {
                this.hours[index].textContent = `${data[index].timeframes.daily.current}hrs`;
                this.previousTime[index].textContent = `Last Daily - ${data[index].timeframes.daily.previous}hrs`;
            });
        });
    }
    weeklyActivity()
    {
        fetch('https://raw.githubusercontent.com/Squirrello-maker/time-tracking-dashboard-frontendmentor/main/src/JSON/data.json')
        .then(res => res.json())
        .then(data =>{
            this.hours.forEach((element, index) => {
                this.hours[index].textContent = `${data[index].timeframes.weekly.current}hrs`;
                this.previousTime[index].textContent = `Last Weekly - ${data[index].timeframes.weekly.previous}hrs`;
            });
        });
    }
    monthlyActivity()
    {
        fetch('https://raw.githubusercontent.com/Squirrello-maker/time-tracking-dashboard-frontendmentor/main/src/JSON/data.json')
        .then(res => res.json())
        .then(data =>{
            this.hours.forEach((element, index) => {
                this.hours[index].textContent = `${data[index].timeframes.monthly.current}hrs`;
                this.previousTime[index].textContent = `Last Monthly - ${data[index].timeframes.monthly.previous}hrs`;
            });
        });
    }
    addFnsToArr()
    {
        this.funsArr = [this.dailyActivity, this.weeklyActivity, this.monthlyActivity];
    }
}
class DOMHandler
{
    static getBtns()
    {
        const sortingButtons = document.querySelectorAll('.report-button');
        return sortingButtons;
    }
    static addEventListeners(btns, funs, obj)
    {
        btns.forEach((btn, i) =>{
            btn.addEventListener('click', funs[i].bind(obj));
        });

    }
}

class App
{
    static init()
    {
       const activity = new ActivityHandler();
       activity.addFnsToArr();
       DOMHandler.addEventListeners(DOMHandler.getBtns(), activity.funsArr, activity);

    }
}
App.init();