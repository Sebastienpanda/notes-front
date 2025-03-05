import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '@core/services/note.service';
import { Archive, ChevronLeft, LucideAngularModule, Tag, Trash2 } from 'lucide-angular';

@Component({
    standalone: true,
    selector: 'app-note-content',
    templateUrl: './note-content.component.html',
    styleUrl: './note-content.component.scss',
    imports: [CommonModule, LucideAngularModule],
})
export class NoteContentComponent {
    readonly ChevronLeftIcon = ChevronLeft;
    readonly TrashIcon = Trash2;
    readonly TagIcon = Tag;
    readonly ArchiveIcon = Archive;

    @Input() note: Note | null = null;
    @Output() goBack = new EventEmitter<void>();

    onGoBack() {
        this.goBack.emit();
    }
}
