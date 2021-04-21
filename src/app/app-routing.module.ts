import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()],
  exports: [RouterModule],

})
export class AppRoutingModule { }
