# NgxSafePipes

This library provide convenient pipes to bypass Angular built-in sanitization and get rid off the `unsafe value used in a ... context`.

## Installation

Install with npm :
```sh
npm i @it-era/ngx-safe-pipes
```

And add the `NgxSafePipesModule` into the imports array of your module (containing the template to fix) :
```ts
import { NgxSafePipesModule } from '@it-era/ngx-safe-pipes';

// ...

@NgModule({
    imports: [
        NgxSafePipesModule,
        // ...
    ]
})
export class YourModule { }
```

## List of pipes

### SafeHtml

Usage :
```HTML
<div [InnerHTML]="trustedHtml | safeHtml"></div>
```

### SafeResourceUrl

Usage :
```HTML
<iframe [src]="trustedSrc | safeResourceUrl"></iframe>
```

### SafeScript

Usage :
```HTML
<script [src]="trustedSrc | safeScript"></script>
```

### SafeStyle

Usage :
```HTML
<style [src]="trustedSrc | safeStyle"></style>
```

### SafeUrl

Usage :
```HTML
<a [href]="trustedHref | safeUrl"></a>
```

WARNING: calling thoses methods with untrusted user data exposes your application to [XSS security risks](https://angular.io/guide/security#xss)!