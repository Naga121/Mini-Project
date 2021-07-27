import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngmaterialModule } from './angmaterial/angmaterial.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { CommentPostComponent } from './Components/comment-post/comment-post.component';

@NgModule({

  declarations: [

    AppComponent,
    NavbarComponent,
    SingleProductComponent,
    CommentsComponent,
    CommentPostComponent

  ],

  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngmaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
