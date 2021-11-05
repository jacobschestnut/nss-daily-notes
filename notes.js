const notes = [
    {
        id: 1,
        subject: "Objects & Arrays",
        date: "10/30/2021",
        feeling: "confident",
        timeSpent: "60"
    }
]

const noteAboutToday = {
    id: 2,
    subject: "Objects & Arrays",
    date: "11/01/2021",
    feeling: "not as confident, but still confident",
    timeSpent: "180"
}

notes.push(noteAboutToday)

// const noteToFind = "not as confident, but still confident"

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id

    const idForNewNote = maxId + 1

    note.id = idForNewNote

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateCreated = date+' '+time;

    note.date = dateCreated

    notes.push(note)
}

const moreNewerNote = {
    subject: "Array Methods & Iterations",
    feeling: "a little lost",
    timeSpent: "180"
}

createNote(moreNewerNote)

// noteToFind = "a little lost"

for (const note of notes) {
    // if (note.feeling === noteToFind) {
    console.log(`Note ${note.id} 
${note.date}
I learned about ${note.subject}
I spent ${note.timeSpent} minutes working on it.
I felt ${note.feeling} about it.

-----------
`)
    // }
}