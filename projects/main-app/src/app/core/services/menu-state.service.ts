import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
@Injectable({ providedIn: 'root' })
export class MenuStateService {
  private activeMenuSubject = new BehaviorSubject<string>('home');

  activeMenu$ = this.activeMenuSubject.asObservable();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    // 🧠 Chỉ chạy đoạn này nếu đang trong trình duyệt
    if (isPlatformBrowser(this.platformId)) {
      const savedMenu = localStorage.getItem('activeMenu');
      if (savedMenu) {
        this.activeMenuSubject.next(savedMenu);
      }

      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const currentUrl = event.urlAfterRedirects;
          const menu = this.mapUrlToMenu(currentUrl);
          if (menu) this.setActiveMenu(menu, false);
        });
    }
  }

  setActiveMenu(menu: string, updateRoute: boolean = true): void {
    this.activeMenuSubject.next(menu);

    localStorage.setItem('activeMenu', menu);
    if (updateRoute) {
      this.router.navigate([`/${menu}`]);
    }
  }
  getActiveMenu(): string {
    return this.activeMenuSubject.value;
  }

  private mapUrlToMenu(url: string): string {
    if (url.includes('/check-in')) return 'checkin';
    if (url.includes('/function')) return 'function';
    return 'home';
  }
}
