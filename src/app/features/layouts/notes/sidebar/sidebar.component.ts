import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { bootstrapArchive, bootstrapChevronRight, bootstrapHouse } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [NgOptimizedImage, CommonModule, NgIcon, RouterModule],
    viewProviders: [provideIcons({ bootstrapHouse, bootstrapArchive, bootstrapChevronRight })],
})
export class SidebarComponent {
    constructor(private router: Router) {}

    menuItems = [
        { label: 'All Notes', link: '/', icon: 'bootstrapHouse' },
        { label: 'Archived Notes', link: '/archived', icon: 'bootstrapArchive' },
    ];

    isActive(link: string): boolean {
        return this.router.isActive(link, {
            paths: 'exact',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
}
