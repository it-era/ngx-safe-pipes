[![GitHub](https://badge.fury.io/gh/it-era%2Fngx-safe-pipes.svg)](https://badge.fury.io/gh/it-era%2Fngx-safe-pipes)  [![npm](https://badge.fury.io/js/%40it-era%2Fngx-safe-pipes.svg)](https://badge.fury.io/js/%40it-era%2Fngx-safe-pipes)

# IT-era / NgxSafePipes

This library provide convenient pipes to bypass Angular built-in sanitization and get rid off the `unsafe value used in a ... context`.

This package is a part of the [IT-era/ngx](https://github.com/it-era/ngx) packages suite.

## Installation

Get it on [npm](https://www.npmjs.com/package/@it-era/ngx-safe-pipes) :

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

CAUTION: Calling thoses methods with untrusted user data exposes your application to [XSS security risks](https://angular.io/guide/security#xss)!

### SafeHtml

Usage :

```HTML
<div [innerHTML]="trustedHtml | safeHtml"></div>
```

### SafeUrl

Usage :

```HTML
<img [attr.src]="trustedUrl | safeUrl">
```

NB: Usefull also for base64 images.

### SafeResourceUrl

Usage :

```HTML
<iframe [attr.src]="trustedResourceUrl | safeResourceUrl"></iframe>
```

### SafeScript

Usage :

```HTML
<script [attr.src]="trustedScript | safeScript"></script>
```

### SafeStyle

Usage :

```HTML
<style [attr.src]="trustedStyle | safeStyle"></style>
```

### Safe

Alternatively, you could use the generic SafePipe with the following syntax:
```HTML
 <div [innerHTML]="trustedHtml | safe: 'html'"></div>
 <style [attr.src]="trustedStyle | safe: 'style'"></style>
 <script [attr.src]="trustedScript | safe: 'script'"></script>
 <img [attr.src]="trustedUrl | safe: 'url'">
 <iframe [attr.src]="trustedResourceUrl | safe: 'resourceUrl'"></iframe>
```

## Changelog

You can find it [here](https://github.com/it-era/ngx-safe-pipes/blob/master/CHANGELOG.md).
