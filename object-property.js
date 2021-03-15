const students = [
    { id: 1, name: 'imran' },
    { id: 2, name: 'hasan' },
    { id: 3, name: 'mahmudul' },
    { id: 4, name: 'muhammad' },
    { id: 5, name: 'karim' },
]

const name = students.map(x => x.name);
const id = students.map(x => x.id);
const bigger = students.filter(x => x.id > 4);
const bigger2 = students.find(x => x.id > 3);

console.log(bigger2);