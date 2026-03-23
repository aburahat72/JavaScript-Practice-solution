let note1 = {
    title: "Note 1",
    content: "iam the engineer",
    author : "abu rahat",
    date : "01-01-2026"
}
let saveNote1 = JSON.stringify(note1);
localStorage.setItem("note1", saveNote1);
console.log(localStorage.getItem("note1"));