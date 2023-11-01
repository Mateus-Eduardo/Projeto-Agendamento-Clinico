import { Input, Component } from '@angular/core';
import { MenuItem } from '../../models/menuItem';
import { menuItems } from '../../models/menu';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() item!: MenuItem;
  items_menu: MenuItem[] = menuItems;  

}
