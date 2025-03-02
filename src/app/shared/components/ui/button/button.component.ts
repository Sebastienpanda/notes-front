import { CommonModule, NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, NgClass],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() disabled = false;
    @Input() variant: 'primary' | 'secondary' | 'border' = 'primary';
    @Input() iconLeft?: string;
    @Input() iconRight?: string;

    get buttonClasses() {
        return {
            btn: true,
            [`btn-${this.variant}`]: true,
            'btn-disabled': this.disabled,
        };
    }
}
