import { NotesList } from "@/widgets/notes-list/ui";
import { Notes } from "@/widgets/notes/ui";

const NotesPage = () => {
  return (
    <div>
      <Notes />
      <NotesList />
    </div>
  );
};

export default NotesPage;
