import { SafeHtmlPipe } from "./safe.html";
import { SafeResourceUrlPipe } from "./safe.resource.url";
import { SafeScriptPipe } from "./safe.script";
import { SafeStylePipe } from "./safe.style";
import { SafeUrlPipe } from "./safe.url";
import { SafePipe } from "./safe";

export const PIPES = [
  SafeHtmlPipe,
  SafeResourceUrlPipe,
  SafeScriptPipe,
  SafeStylePipe,
  SafeUrlPipe,
  SafePipe
];

export {
  SafeHtmlPipe,
  SafeResourceUrlPipe,
  SafeScriptPipe,
  SafeStylePipe,
  SafeUrlPipe,
  SafePipe
};
