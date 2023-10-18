import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MarkdownService } from 'ngx-markdown';
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { ContentModel, ContentService } from 'src/app/shared';

@Component({
  selector: 'cfg-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styles: [
  ]
})
export class MarkdownEditorComponent implements OnInit {
  bsEditorInstance!: EditorInstance;
  form: FormGroup;
  editorOptions!: EditorOption;
  markdownText = '';


  constructor(private markdownService: MarkdownService, private readonly contentService: ContentService){
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onFullscreenExit: (e) => this.hidePreview(),
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val)
    };

    this.contentService.getMany().subscribe(n => {
      console.log(n);
    });
    this.form.addControl('title', new FormControl('', Validators.required));
    this.form.addControl('content', new FormControl(this.markdownText, Validators.required));    
  }

  onSubmit(): void {
    console.log(this.form.get('content')?.value);
    if(this.form.valid) {
      const model: ContentModel = {
        title : this.form.get('title')?.value,
        content: this.form.get('content')?.value
      };

      this.contentService.create(model).subscribe(c => {
        console.log(c);
      });
    }
  }

  hidePreview() {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.parse(inputValue.trim());
    this.highlight();

    return markedOutput;
  }

  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

}
