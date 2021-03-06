import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { ChoiceModule } from './choice/choice.module';
import { ChoiceComponent } from './choice/choice.component';
import { ConnectedGuard } from '../shared/guards/connected.guard';
import { DistributorComponent } from './distributor/distributor.component';
import { DistributorModule } from './distributor/distributor.module';
import { AuthorityComponent } from './authority/authority.component';
import { AuthorityModule } from './authority/authority.module';
import { ConsumptionMeterComponent } from './consumption/consumption-meter.component';
import { ConsumptionMeterModule } from './consumption/consumption-meter.module';
import { ProductionMeterComponent } from './production/production-meter.component';
import { ProductionMeterModule } from './production/production-meter.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'choice',
    component: ChoiceComponent,
    canActivate: [ConnectedGuard]
  },
  {
    path: 'distributor',
    component: DistributorComponent,
    canActivate: [ConnectedGuard]
  },
  {
    path: 'authority',
    component: AuthorityComponent,
    canActivate: [ConnectedGuard]
  },
  {
    path: 'consumption-meter',
    component: ConsumptionMeterComponent,
    canActivate: [ConnectedGuard]
  },
  {
    path: 'production-meter',
    component: ProductionMeterComponent,
    canActivate: [ConnectedGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    HomeModule,
    ChoiceModule,
    DistributorModule,
    AuthorityModule,
    ConsumptionMeterModule,
    ProductionMeterModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
