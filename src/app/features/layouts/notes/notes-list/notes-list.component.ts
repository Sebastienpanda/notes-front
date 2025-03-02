import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '@core/services/note.service';
import { EmptyStateComponent } from '@shared/components/emptyState/empty-state.component';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { FormatDatePipe } from '@shared/pipes/format-date.pipe';

@Component({
    selector: 'app-notes-list',
    standalone: true,
    templateUrl: './notes-list.component.html',
    styleUrl: './notes-list.component.scss',
    imports: [CommonModule, EmptyStateComponent, FormatDatePipe, ButtonComponent],
})
export class NotesListComponent implements OnInit {
    constructor(private noteService: NoteService) {}
    notes: Note[] = [];

    ngOnInit() {
        this.noteService.getNotes().subscribe(data => {
            this.notes = data;
        });
    }

    trackById(index: number, note: { id: number }): number {
        return note.id;
    }
}
