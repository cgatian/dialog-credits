import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { Route, RouterModule } from '@angular/router';

import { CreditLauncherComponent } from './components/credit-launcher/credit-launcher.component';
import { CreditsComponent } from './components/credits/credits.component';
import { HomeView } from './home.view';

const routes: Route[] = [
  {
    // TODO: Remove once https://github.com/angular/angular/issues/10981#issuecomment-301787482 is merged
    path: 'load', component: HomeView,
    children: [
      { path: 'credits', outlet: 'dialog', component: CreditLauncherComponent },
    ]
  },
];

@NgModule({
  declarations: [
    HomeView,
    CreditsComponent,
    CreditLauncherComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
  entryComponents: [
    CreditsComponent
  ]
})
export class HomeModule {}
