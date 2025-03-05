import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '@core/services/note.service';
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
export class NotesListComponent {
    @Input() notes: Note[] = [];
    @Input() activeNote: Note | null = null;
    @Input() isMobileOrTablet = false;
    @Output() noteSelected = new EventEmitter<Note>();

    trackById(index: number, note: { id: number }): number {
        return note.id;
    }

    onNoteClick(note: Note) {
        this.noteSelected.emit(note);
    }

    isNoteActive(note: Note): boolean {
        return this.activeNote?.id === note.id;
    }
}
