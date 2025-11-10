import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuStateService } from '@core/services/menu-state.service';
@Component({
  selector: 'app-footer',
  imports: [RouterLinkActive, RouterLink],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  activeMenu: string = '';
  constructor(private menuState: MenuStateService) {}

  ngOnInit(): void {
    this.menuState.activeMenu$.subscribe((menu) => {
      this.activeMenu = menu;
    });
  }

  onMenuClick(menu: string): void {
    this.menuState.setActiveMenu(menu);
  }
}
