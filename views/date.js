
let currDate= new Date();

var options = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};



currDate= currDate.toLocaleDateString("en-US", options);
module.exports={today:currDate}