import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { Observable, Subject } from 'rxjs';
import { ContentModel, ContentService } from 'src/app/shared';

@Component({
  selector: 'cfg-aside',
  templateUrl: './aside.component.html',
  styles: [
  ]
})
export class AsideComponent implements OnInit {

  listData: Observable<Array<ContentModel>> | undefined;

  constructor(public markdownService: MarkdownService, private readonly contentService: ContentService) {    
  }

  ngOnInit(): void {
    this.listData = this.contentService.getMany();
  }
}
