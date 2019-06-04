import { SafeHtmlPipe } from './safe.html';
import { SafeResourceUrlPipe } from './safe.resource.url';
import { SafeUrlPipe } from './safe.url';
import { SafeStylePipe } from './safe.style';
import { SafeScriptPipe } from './safe.script';

export const PIPE_PROVIDERS = [
  SafeHtmlPipe,
  SafeStylePipe,
  SafeScriptPipe,
  SafeResourceUrlPipe,
  SafeUrlPipe,
];

export {
  SafeHtmlPipe,
  SafeStylePipe,
  SafeScriptPipe,
  SafeResourceUrlPipe,
  SafeUrlPipe,
};
