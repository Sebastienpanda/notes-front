import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { House, Search, Archive, Tags, LucideAngularModule, Settings } from 'lucide-angular';

@Component({
    standalone: true,
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    imports: [RouterLink, CommonModule, RouterModule, LucideAngularModule],
})
export class NavigationComponent {
    readonly HouseDoorIcon = House;
    readonly SearchIcon = Search;
    readonly ArchiveIcon = Archive;
    readonly TagsIcon = Tags;
    readonly SettingIcon = Settings;

    navItems = [
        { icon: this.HouseDoorIcon, label: 'Home', route: '/' },
        { icon: this.SearchIcon, label: 'Search', route: '/search' },
        { icon: this.ArchiveIcon, label: 'Archived', route: '/archived' },
        { icon: this.TagsIcon, label: 'Tags', route: '/tags' },
        { icon: this.SettingIcon, label: 'Settings', route: '/settings' },
    ];
}
