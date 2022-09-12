/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}

function createEmployeeRecords(recordsArray) {
    return recordsArray.map(e => createEmployeeRecord(e));
}

function createTimeInEvent(timeInEvent){
    const [date, hour] = timeInEvent.split(' ');
    this.timeInEvents.push(
        {
            type: 'TimeIn',
            date: date,
            hour: Number(hour)
        }
    );

    return this;
}

function createTimeOutEvent(timeOutEvent) {
    const [date, hour] = timeOutEvent.split(' ');
    const timeOut = {
        type: 'TimeOut',
        date: date,
        hour: Number(hour),
    };
    this.timeOutEvents.push(timeOut);

    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date).hour;
    const timeOut = this.timeOutEvents.find(e => e.date === date).hour;

    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.apply(this, [date])* this.payPerHour
}

const findEmployeeByFirstName = function (srcArray, targetName){
    for(let i=0; i<srcArray.length;i++){
        if(srcArray[i].firstName===targetName){
            return srcArray[i]
        }}
};

const calculatePayroll = function(recsArray){
    let payroll = []
    recsArray.forEach(element => payroll.push(allWagesFor.call(element)))
    return payroll.reduce((a,b)=>{return a+b})
}