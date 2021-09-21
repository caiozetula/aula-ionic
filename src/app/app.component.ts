import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'albums' },
    { title: 'Botões', url: 'botao', icon: 'construct' },
    { title: 'Alert', url: 'alert', icon: 'alert-circle' },
    { title: 'Action Sheet', url: 'actionsheet', icon: 'flash' },
    { title: 'Badge', url: 'badge', icon: 'notifications' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
