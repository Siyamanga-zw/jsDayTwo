let subjects = ['Python', 'C++', 'VB.Net', 'Javascript', 'Assembly'];
let last= subjects.pop();//function to extract assembly out of the array
console.log(last); 
subjects.push(last) ;//re adding
// subjects.push('choc')
// console.log(subjects);
let middle = Math.floor(subjects.length/2);//math.floor rounding up function
let result= (subjects.length%2)==0 ? console.log( subjects[mid-1]+' '+subjects[mid]) : console.log(subjects[mid]);
console.log(result);



