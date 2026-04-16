import {Register} from './Register';
import {domReady} from '../../core/DomReady';

domReady.ready(() => {
  new Register().init();
});
