
let currDate= new Date();
function getday(){
var options = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};



currDate= currDate.toLocaleDateString("en-US", options);

return currDate;
}
module.exports={getday}