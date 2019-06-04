import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeScript } from '@angular/platform-browser';

/**
 * @ngModule NgxSafePipesModule
 * 
 * @description
 * Bypass the Angular built-in security check for a script
 *
 * @usageNotes
 * ### Examples
 * @example <script [attr.src]="trustedSrc | safeScript"></script>
 *
 */
@Pipe({ name: 'safeScript' })
export class SafeScriptPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(script): SafeScript {
    return this.sanitizer.bypassSecurityTrustScript(script);
  }
}
