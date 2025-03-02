import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Note } from '@core/services/note.service';

@Component({
    selector: 'app-note-content',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './note-content.component.html',
    styleUrl: './note-content.component.scss',
})
export class NoteContentComponent {
    @Input() note: Note | null = null;
}
