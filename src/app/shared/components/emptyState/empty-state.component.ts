import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-empty-state',
    standalone: true,
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
    @Input() message = 'No items found';
}
