import modals from './module/modals.js';
import forms from './module/forms.js';
import subscription from './module/subscription.js';
import filter from './module/filter.js';





window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  //Активация tooltip на странице (всплывающие подсказки)
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


  modals('.becomeAuthor', '.modal-become-author', '.become-author-close');
  modals('.participateMeeting', '.modal-participate-meeting', '.participate-meeting-close');
  modals('.callRequest', '.modal-call-request', '.call-request-close');
  forms();
  subscription();
  filter();
  
});
