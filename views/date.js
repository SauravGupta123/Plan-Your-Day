
const currDate = new Date();
function getFulldate() {
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    return currDate.toLocaleDateString("en-US", options);
}


function getday() {
    let options = {
        weekday: 'long'

    };
  return currDate.toLocaleDateString("en-US", options);

}
module.exports = {
    getFulldate,
    getday
};

