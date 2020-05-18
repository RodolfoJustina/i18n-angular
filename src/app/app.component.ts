import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'i18n-angular';

  locales = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' },
    { code: 'pt', label: 'Portuguese' },
  ];

  constructor(@Inject(LOCALE_ID) public localeId: string) {}
}
