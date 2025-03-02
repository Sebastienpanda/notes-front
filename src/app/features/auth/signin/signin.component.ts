import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { bootstrapEye, bootstrapEyeSlash, bootstrapInfoCircle } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ButtonComponent } from '@shared/components/ui/button/button.component';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage, RouterLink, ButtonComponent, NgIcon],
    viewProviders: [provideIcons({ bootstrapEye, bootstrapEyeSlash, bootstrapInfoCircle })],
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.scss',
})
export class SigninComponent {
    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
    });

    showPassword = false;

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        if (this.form.valid) {
            console.log('Formulaire soumis', this.form.value);
        } else {
            console.log('Formulaire invalide');
        }
    }
}
