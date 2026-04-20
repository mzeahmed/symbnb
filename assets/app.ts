import {Autogrow} from './scripts/shared/UI/Autogrow';
import {domReady} from './scripts/core/DomReady';

import './styles/app.scss';
import 'bootstrap';
import 'notyf/notyf.min.css';
import {loader} from './scripts/shared/UI/loader';

domReady
  .ready(() => {
    Autogrow.init();
  })
  .onLoad(() => {
    loader.hide();
  });