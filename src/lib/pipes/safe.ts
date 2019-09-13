
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

/**
 * @ngModule NgxSafePipesModule
 *
 * @description
 * Bypass the Angular built-in security check
 *
 * @usageNotes
 * ### Examples
 * @example <div [innerHTML]="trustedHtml | safe: 'html'"></div>
 * @example <style [attr.src]="trustedStyle | safe: 'style'"></style>
 * @example <script [attr.src]="trustedScript | safe: 'script'"></script>
 * @example <img [attr.src]="trustedUrl | safe: 'url'">
 * @example <iframe [attr.src]="trustedResourceUrl | safe: 'resourceUrl'"></iframe>
 *
 */
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}. Use one of : 'html' | 'style' | 'script' | 'url' | 'resourceUrl'.`);
    }
  }
}
