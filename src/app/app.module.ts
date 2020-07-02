import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule ],
  declarations: [ AppComponent, HelloComponent, PostCreateComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
