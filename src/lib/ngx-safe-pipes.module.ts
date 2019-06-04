import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { PIPE_PROVIDERS } from '.';
import { SafeHtmlPipe } from './pipes/safe.html';
import { SafeResourceUrlPipe } from './pipes/safe.resource.url';
import { SafeScriptPipe } from './pipes/safe.script';
import { SafeStylePipe } from './pipes/safe.style';
import { SafeUrlPipe } from './pipes/safe.url';

const PIPE_PROVIDERS = [
  SafeHtmlPipe,
  SafeResourceUrlPipe,
  SafeScriptPipe,
  SafeStylePipe,
  SafeUrlPipe,
];


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
  imports: [
    CommonModule,
  ],
  declarations: [
    ...PIPE_PROVIDERS,
  ],
  exports: [
    ...PIPE_PROVIDERS,
  ]
})
export class NgxSafePipesModule { }
