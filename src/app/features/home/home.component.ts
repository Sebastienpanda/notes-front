import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Note, NoteService } from '@core/services/note.service';
import { NotesGridComponent } from '@features/layouts/notes/notes-grid/notes-grid.component';
import { EmptyStateComponent } from '@shared/components/emptyState/empty-state.component';
import { FormatDatePipe } from '@shared/pipes/format-date.pipe';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, NgOptimizedImage, FormatDatePipe, EmptyStateComponent, NotesGridComponent],
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

    isMobileOrTablet = signal(false);

    ngOnInit() {
        this.noteService.getNotes().subscribe(data => {
            this.notes = data;
        });
    }

    trackById(index: number, note: { id: number }): number {
        return note.id;
    }
}
