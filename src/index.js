import {template} from "./modules/first";

const root = document.querySelector('#root');
const Handlebars = require('Handlebars');

root.innerHTML = template({ comments: [{subject: 'subject', body: 'body'}] });
