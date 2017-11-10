import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './Pipes/search.pipe';
import { MarkPipe } from './Pipes/search-to-mark.pipe';
import { OrderByPipe } from './Pipes/order-by.pipe';
import { DetailsComponent } from './components/details/details.component';
import { AppRouting } from './app-routing.module';
import { UserServise } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPipe,
    MarkPipe,
    OrderByPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
