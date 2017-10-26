/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Login_PhonePortrait,
    Blank_PhonePortrait
  ];
  static mapping = {
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    }
  }
}