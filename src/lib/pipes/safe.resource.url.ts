import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * @ngModule NgxSafePipesModule
 * 
 * @description
 * Bypass the Angular built-in security check for a resource url
 *
 * @usageNotes
 * ### Examples
 * @example <iframe [src]="trustedSrc | safeResourceUrl"></iframe>
 *
 * @publicApi
 */
@Pipe({ name: 'safeResourceUrl' })
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(url): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
