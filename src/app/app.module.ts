import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule, MatCardModule, MatButtonModule ],
  declarations: [ AppComponent, HelloComponent, PostCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
