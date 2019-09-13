import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * @ngModule NgxSafePipesModule
 *
 * @description
 * Bypass the Angular built-in security check for an html content
 *
 * @usageNotes
 * ### Examples
 * @example <div [innerHTML]="trustedHtml | safeHtml"></div>
 */
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(html): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
