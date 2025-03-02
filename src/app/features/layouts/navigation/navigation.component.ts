import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {
    bootstrapArchive,
    bootstrapGear,
    bootstrapHouse,
    bootstrapSearch,
    bootstrapTag,
} from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    imports: [RouterLink, NgIcon, CommonModule, RouterModule],
    viewProviders: [provideIcons({ bootstrapHouse, bootstrapSearch, bootstrapArchive, bootstrapTag, bootstrapGear })],
})
export class NavigationComponent {
    navItems = [
        { icon: 'bootstrapHouse', label: 'Home', route: '/' },
        { icon: 'bootstrapSearch', label: 'Search', route: '/search' },
        { icon: 'bootstrapArchive', label: 'Archived', route: '/archived' },
        { icon: 'bootstrapTag', label: 'Tags', route: '/tags' },
        { icon: 'bootstrapGear', label: 'Settings', route: '/settings' },
    ];
}
