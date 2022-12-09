'use strict';

(function () {

  //https://dokume.net/public/applicantChallenge/

  init();

  function init() {
    checkOpen();
  }

  function bindEvents() {
    document.getElementById('loginBTN').addEventListener('click', login);
  }

  function checkOpen() {
    fetch('https://dokume.net/public/applicantChallenge/api.php?' + new URLSearchParams({
      endpoint: 'isopen'
    }))
      .then(response => response.json())
      .then(data => {
        if (data.SUCCESS !== 'open') {
          window.location = 'https://dokume.net'
          return false;
        }

        bindEvents();
      });
  }

  function login() {
    fetch('https://dokume.net/public/applicantChallenge/api.php?' + new URLSearchParams({
      endpoint: 'login',
      password: document.getElementById('password').value
    }))
      .then(response => response.json())
      .then(data => {
        if (data.SUCCESS === 'challenge') {
          $.getScript('helloWorld.js');
          $.getScript('startHere.js');
          $.getScript('checkMe.js');
        } else if (data.SUCCESS === 'almost') {
          alert(data.MESSAGE);
        } else if (data.SUCCESS === true) {
          document.querySelector('section').innerHTML = data.MESSAGE;
        }
      });
  }

})();