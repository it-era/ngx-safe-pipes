import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

/**
 * @ngModule NgxSafePipesModule
 *
 * @description
 * Bypass the Angular built-in security check for a style
 *
 * @usageNotes
 * ### Examples
 * @example <div [attr.style]="trustedStyle | safeStyle"></div>
 */
@Pipe({ name: 'safeStyle' })
export class SafeStylePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(style): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
