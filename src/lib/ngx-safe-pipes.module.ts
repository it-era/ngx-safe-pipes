import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PIPES } from './pipes/index';

/**
 * Exports all the pipes used to bypass Angular built-in sanitization
 * such as `SafeHtml`, `SafeUrl`, `SafeStyle`, and so on.
 *
 * The `exports` options make the declared pipes available for import
 * by other NgModules.
 *
 */
@NgModule({
  imports: [
  ],
  declarations: [
    ...PIPES,
  ],
  exports: [
    ...PIPES,
  ],
  providers: [
  ]
})
export class NgxSafePipesModule { }
