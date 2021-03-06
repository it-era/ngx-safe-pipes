import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

/**
 * @ngModule NgxSafePipesModule
 *
 * @description
 * Bypass the Angular built-in security check for an url
 *
 * @usageNotes
 * ### Examples
 * @example <img [attr.src]="trustedUrl | safeUrl"></img>
 */
@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(url): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
