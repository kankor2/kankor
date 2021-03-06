import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'chtest', loadChildren: './chtest/chtest.module#ChtestPageModule' },
  { path: 'hard-q', loadChildren: './hard-q/hard-q.module#HardQPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'azmon', loadChildren: './azmon/azmon.module#AzmonPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

];



