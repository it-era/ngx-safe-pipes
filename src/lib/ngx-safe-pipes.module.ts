import { NgModule } from '@angular/core';
import { PIPE_PROVIDERS } from './pipes';


/**
 * Exports all the pipes used to bypass Angular built-in sanitization
 * such as `SafeHtml`, `SafeUrl`, `SafeStyle`, and so on.
 *
 * The `exports` options make the declared pipes available for import
 * by other NgModules.
 *
 * @publicApi
 */
@NgModule({
  declarations: [
    ...PIPE_PROVIDERS,
  ],
  imports: [
  ],
  exports: [
    ...PIPE_PROVIDERS,
  ]
})
export class NgxSafePipesModule { }
