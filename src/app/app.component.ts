import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '@features/layouts/navigation/navigation.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, NavigationComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    isMobileOrTablet = signal(false);
    hideNavigation = signal(false);

    constructor(
        private breakpointObserver: BreakpointObserver,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
            this.isMobileOrTablet.set(result.matches);
        });
    }

    ngOnInit() {
        this.router.events.subscribe(() => {
            this.hideNavigation.set(this.router.url.includes('/connect'));
        });
    }
}
