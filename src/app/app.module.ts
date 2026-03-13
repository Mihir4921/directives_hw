import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyElementDirective } from './task-list/modify-element.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MaskPhoneNumPipe } from './pipes/mask-phone-num.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { FormControlComponent } from './form-control/form-control.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ModifyElementDirective,
    PipesComponent,
    MaskPhoneNumPipe,
    ParentComponent,
    ChildComponent,
    SiblingsComponent,
    FormControlComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
