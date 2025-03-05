import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Archive, ChevronRight, House, LucideAngularModule } from 'lucide-angular';

@Component({
    standalone: true,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [NgOptimizedImage, CommonModule, RouterModule, LucideAngularModule],
})
export class SidebarComponent {
    readonly HouseIcon = House;
    readonly ArchiveIcon = Archive;
    readonly ChevronRightIcon = ChevronRight;
    constructor(private router: Router) {}

    menuItems = [
        { label: 'All Notes', link: '/', icon: this.HouseIcon },
        { label: 'Archived Notes', link: '/archived', icon: this.ArchiveIcon },
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
