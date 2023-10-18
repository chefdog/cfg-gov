import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { DashboardComponent } from './components';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { CheckboxComponent } from './components/forms/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { MarkdownEditorComponent } from './components/forms/markdown-editor/markdown-editor.component';

import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LeftNavComponent,
    CheckboxComponent,
    MarkdownEditorComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot({
      // loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularMarkdownEditorModule.forRoot({
      // add any Global Options/Config you might want
      // to avoid passing the same options over and over in each components of your App
      iconlibrary: 'fa'
    }),
    SamplesRoutingModule
  ]
})
export class SamplesModule { 
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faExclamation);
  }
}
