import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PassportComponent } from './passport/passport.component'
import { AchievementComponent } from './achievement/achievement.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PassportComponent,
    AchievementComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}