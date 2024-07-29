// Date(year,month,day,hour,minute,second,ms)
var date = new Date();
date = new Date(2024, 0, 1, 2, 3, 4, 5);
date = new Date("2024-01-02T12:00:00Z");
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var dayOfWeek = date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);
date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
console.log(date);
var date1 = new Date("2023-12-31");
var date2 = new Date("2024-01-01");
if (date2 > date1) {
    console.log("HAPPY NEW YEAR");
}
