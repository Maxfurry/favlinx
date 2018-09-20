/*global io*/
/** @type {RTCConfiguration} */
const config = { // eslint-disable-line no-unused-vars
  'iceServers': [{
    'urls': ['stun:stun.l.google.com:19302']
  }]
};
  
// const video = document.querySelector('video'); // eslint-disable-line no-unused-vars
// const video = document.querySelector('video');
//const video = document.getElementById('camera');
const screen = document.getElementById('screen');
window.onunload = window.onbeforeunload = function() {
  socket.close();
};
  
  