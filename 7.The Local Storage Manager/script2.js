// Create a note object
let note = {
  title: "Study",
  content: "Learn JavaScript Local Storage"
};

// Convert object to string
let noteString = JSON.stringify(note);

// Save to local storage
localStorage.setItem("note", noteString);

// Check what is stored
console.log(localStorage.getItem("note"));