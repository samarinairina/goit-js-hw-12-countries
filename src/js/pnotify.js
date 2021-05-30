import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { error, defaults, defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
defaultModules.set(PNotifyBootstrap4, {});

defaults.styling = 'material';
defaults.width = '150px';
defaults.minHeight = '8px';
defaults.inClass = 'fadeInDown';
defaults.outClass = 'fadeOutUp';

export { error };
