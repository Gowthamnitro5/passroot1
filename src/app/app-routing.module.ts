import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { PassportComponent } from './passport/passport.component'
import { AchievementComponent } from './achievement/achievement.component'

const routes: Routes = [
  { path: '', redirectTo: '/passport', pathMatch: 'full' },
  { path: 'passport', component: PassportComponent },
  { path: 'achievement/:id', component: AchievementComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}