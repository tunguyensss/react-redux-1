export function addNewNote(note) {
  return {
    type: 'ADD_NEW_NOTE',
    payload: note,
  };
}

export function completeANote(noteId) {
  return {
    type: 'COMPLETE_A_NOTE',
    _id: noteId,
  };
}

export function deleteAnNote(noteId) {
  return {
    type: 'DELETE_A_NOTE',
    _id: noteId,
  };
}
