import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '@core/services/note.service';
import { NotesHeaderComponent } from '../header/header.component';
import { NoteContentComponent } from '../note-content/note-content.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-notes-grid',
    templateUrl: './notes-grid.component.html',
    styleUrls: ['./notes-grid.component.scss'],
    imports: [CommonModule, NotesHeaderComponent, NotesListComponent, SidebarComponent, NoteContentComponent],
})
export class NotesGridComponent implements OnInit {
    constructor(private noteService: NoteService) {}
    notes: Note[] = [];
    selectedNote: Note | null = null;

    ngOnInit() {
        this.noteService.getNotes().subscribe(data => {
            this.notes = data;
        });
    }

    trackById(index: number, note: { id: number }): number {
        return note.id;
    }

    onSelect(note: Note) {
        this.selectedNote = note;
    }
}
