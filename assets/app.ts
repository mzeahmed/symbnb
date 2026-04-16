/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import {Autogrow} from './scripts/shared/UI/Autogrow';
import {DomReady} from './scripts/core/DomReady';

import './styles/app.scss';
import '@tailwindplus/elements';

DomReady.run(() => {
  Autogrow.init();
});
