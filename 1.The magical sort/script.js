const students = [
  "Luna",
  "Cedric",
  "Hermione",
  "Neville",
  "DracoMalfoy",
  "BellatrixLestrange",
  "ChoChang",
  "Ginny",
  "SeverusSnape",
  "AlbusDumbledore",
];
let gryffindor = [];
let hufflepuff = [];
let ravenclaw = [];
let a = students.forEach((student) => {
  if (student.length < 6) {
    gryffindor.push(student);
  } else if (student.length < 8) {
    hufflepuff.push(student);
  } else if (student.length <= 12) {
    ravenclaw.push(student)
  }
});
console.log(`grifynder: ${gryffindor}`);
console.log("Hufflepuff: " + hufflepuff);
console.log("Ravenclaw: " + ravenclaw);

