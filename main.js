const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi

for (let i = 0; i < names.length; i++) {
    const thisName = names[i];
    console.log(thisName);
}



const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
people.forEach((person) => {
    console.log(person.name);
})


const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const incrementNumber = numbers.map((NumberPlusOne) => {
    return (NumberPlusOne) +1
    
})
console.log(incrementNumber);


const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

const authors = posts.map((author) => {
    return author.author
})
console.log(authors);



const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const evenNumbs = nums.filter((evenNumb) => {
    if (evenNumb % 2 === 0) {
        return true
    }
        return false
})
console.log(evenNumbs);


const pencils = [
  { brand: 'Faber-Castell', weight: 8, sizeInCm: 12 },
  { brand: 'Staedtler', weight: 9, sizeInCm: 18 },
  { brand: 'Faber-Castell', weight: 7, sizeInCm: 10 },
  { brand: 'Staedtler', weight: 10, sizeInCm: 16 },
  { brand: 'Faber-Castell', weight: 6, sizeInCm: 14 },
  { brand: 'Derwent', weight: 5, sizeInCm: 20 },
  { brand: 'Derwent', weight: 4, sizeInCm: 11 },
  { brand: 'Staedtler', weight: 6, sizeInCm: 9 },
  { brand: 'Caran d’Ache', weight: 12, sizeInCm: 22 },
  { brand: 'Caran d’Ache', weight: 11, sizeInCm: 13 },
];

// A partire dall'array fornito, crea due array. Uno con le matite lunghe almeno 15cm. 
// L'altro con le restanti.

const longPencils = pencils.filter((longPencil) => {
    if (longPencil.sizeInCm >= 15) {
        return true
    } 
        return false
})
console.log(longPencils);

const shortPencils = pencils.filter((shortPencil) => {
    if (shortPencil.sizeInCm < 15) {
        return true
    }
        return false
})
console.log(shortPencils);





const students = [
  {
   id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
   id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
   id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2

const studentId2 = students.find((student) => {
    if (student.id === 2) {
        return true
    }
        return false
})
console.log(studentId2);



const students_2 = [
  {
  id: 1,
    name: 'Marco Lanci',
    age: 32,
    classroom: '3C'
  },
  {
  id: 2,
    name: 'Mario Banfi',
    age: 34,
    classroom: '4A'
  },
  {
  id: 3,
    name: 'Luigi Banzi',
    age: 33,
    classroom: '5B'
  },
];

// Recuperare la classe dello studente Marco Lanci

const studentClass = students_2.find((student) => {
    if (student.name === "Marco Lanci") {
        return true
    }
        return false
})
console.log(studentClass.classroom);
