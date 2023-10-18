import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent, DashboardComponent } from './components';
import { MarkdownEditorComponent } from './components/forms/markdown-editor/markdown-editor.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'forms/checkbox', component: CheckboxComponent },
  { path: 'forms/markdown', component: MarkdownEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
