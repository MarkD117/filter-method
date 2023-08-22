  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// Filtering just 'Paul' from the people array
const paul = people.filter(p => p.name === 'Paul')[0]; // 0 index gets object only
console.log(paul);



// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// filtering the inner skills array to only those skills with at least five years of experience.


// Complex filter
// const candidates = students.filter(student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
//   return strongSkills.length > 0;
// });

// console.log(candidates);


// Cleaner example
const has5yearsExp = skill => skill.yrsExperience >= 5;
/**
 * In the case of Ariel, this will just return an empty  array, since none of her skills pass the test.
 * to return a true or false result for the original filter, we return whether strongSkills.length is 
 * greater than zero.
 */
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
const candidateNames = candidates.map(candidate => [candidate.name]) // Logs maps only acceptable candidate names
console.log(candidateNames);