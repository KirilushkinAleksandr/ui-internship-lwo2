const students = [
  {
    id: 1,
    name: 'Andrii',
    age: 22,
    isWorkExperience: true,
  },
  {
    id: 2,
    name: 'Anna',
    age: 21,
    isWorkExperience: false,
  },
  {
    id: 3,
    name: 'Marta',
    age: 23,
    isWorkExperience: true,
  },
];
/**
 * @example
 * // returns a table with filled data from the passed array
 * populateTable ([
 * {
 *   id: 1,
 *   name: 'Andrii',
 *   age: 22,
 *   isWorkExperience: true
 * },
 * {
 *   id: 2,
 *   name: 'Anna',
 *   age: 21,
 *   isWorkExperience: false
 * },
 * {
 *   id: 3,
 *   name: 'Marta',
 *   age: 23,
 *   isWorkExperience: true
 *  },
 * ])
 * function populateTable takes array of objects and builds the table from it
 * @param {Array} input, passed array of objects
 */
function populateTable(input) {
  const studentsArr = input.slice();
  const table = document.createElement('table');
  const thead = table.insertRow();
  const headers = Object.keys(students[0]);
  for (const item of headers) {
    const th = thead.insertCell();
    th.innerHTML = item;
  }
  for (const student of studentsArr) {
    const row = table.insertRow();
    for (const key in student) {
      if (student.hasOwnProperty(key)) {
        const cell = row.insertCell();
        if (typeof(student[key]) !== 'boolean') {
          cell.innerHTML = student[key];
        } else {
          cell.innerHTML = student[key] ? 'yes' : 'no';
        }
      }
    }
  }

  document.body.appendChild(table);
}

export {populateTable};
