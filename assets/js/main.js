"use strict";

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(function()
{
  $('.btn-group-fab').on('click', '.btn', function()
  {
    $('.btn-group-fab').toggleClass('active');
  });

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl)
  {
    return new bootstrap.Popover(popoverTriggerEl)
  })
});