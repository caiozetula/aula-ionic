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
    { title: 'Card', url: 'card', icon: 'layers' },
    { title: 'Checkbox', url: 'checkbox', icon: 'checkbox' },
    { title: 'Chip', url: 'chip', icon: 'hardware-chip' },
    { title: 'Content', url: 'content', icon: 'library' },
    { title: 'Date Time', url: 'datetime', icon: 'calendar' },
    { title: 'FAB', url: 'fab', icon: 'sparkles' },
    { title: 'Grid', url: 'grid', icon: 'grid' },
    { title: 'Infinite Scroll', url: 'infinitescroll', icon: 'infinite' },
    { title: 'Input', url: 'input', icon: 'text' },
    { title: 'List', url: 'list', icon: 'list' },
    { title: 'Progress Bar', url: 'progressbar', icon: 'play-forward' },
    { title: 'Refresher', url: 'refresher', icon: 'refresh-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
