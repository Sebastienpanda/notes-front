import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Note, NoteService } from '@core/services/note.service';
import { NoteContentComponent } from '@features/layouts/notes/note-content/note-content.component';
import { NotesGridComponent } from '@features/layouts/notes/notes-grid/notes-grid.component';
import { NotesListComponent } from '@features/layouts/notes/notes-list/notes-list.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, NgOptimizedImage, NotesGridComponent, NotesListComponent, NoteContentComponent],
})
export class HomeComponent implements OnInit {
    constructor(
        private noteService: NoteService,
        private breakpointObserver: BreakpointObserver
    ) {
        this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
            this.isMobileOrTablet.set(result.matches);
        });
    }

    notes: Note[] = [];
    selectedNote: Note | null = null;

    isMobileOrTablet = signal(false);

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
