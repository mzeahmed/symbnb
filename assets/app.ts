/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import {Autogrow} from './scripts/shared/UI/Autogrow';
import {domReady} from './scripts/core/DomReady';

import './styles/app.scss';
import '@tailwindplus/elements';
import 'notyf/notyf.min.css';
import {loader} from './scripts/shared/UI/loader';

domReady
  .ready(() => {
    Autogrow.init();
  })
  .onLoad(() => {
    loader.hide();
  });
