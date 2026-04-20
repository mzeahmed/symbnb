import {domReady} from '../../core/DomReady';
import {Book} from './Book';
import 'flatpickr/dist/flatpickr.min.css';

domReady.ready(() => {
  new Book().boot();
});
