import data from "./data.json";


data.forEach(function (element) {
    element.total = Number(element.marks.Maths) + Number(element.marks.English) + Number(element.marks.Science);
});

const max = data.reduce((prev, current) => (prev.total > current.total) ? prev : current);
var maxMarks = max.total;

data.forEach(function (element) {
    if (element.marks.Maths < 20 || element.marks.English < 20 || element.marks.Science < 20)
        element.status = "Fail";
    else if (element.total === maxMarks)
        element.status = "Topper";
    else
        element.status = "Pass";
});

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
data.sort(compare);
data.forEach(function (element) {
    element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1);
});
console.log(data);
export default data;