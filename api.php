<?php

switch ($_GET['endpoint']) {
  case 'login': 

    if ($result = $_GET['password'] == '2') {
      $result = ['MESSAGE' => 'Please inspect the network requests and check for further hints.', 'SUCCESS' => 'challenge'];
    } else if ($_GET['password'] == 'V2VBcmVQcm91ZE9mWW91') {
      $result = ['MESSAGE' => 'Ups - this password is base64 encoded. Please decode it and try again.', 'SUCCESS' => 'almost'];
    } else if ($_GET['password'] == 'WeAreProudOfYou') {
      $result = ['MESSAGE' => '<h1>👏🏼👏🏼👏🏼</h1>Good Job! Our meeting link is:<br><b><a href="https://meeting.dokume.net/#/finalJobChallenge">https://meeting.dokume.net/#/finalJobChallenge</a></b><br><i>See you soon</i>', 'SUCCESS' => true];
    } else {
      $result = ['MESSAGE' => 'Password wrong', 'SUCCESS' => false];
    }

    break;

  case 'isopen':
    $result = ['SUCCESS' => 'open'];
    break;
  default: $result = ['MESSAGE' => 'Endpoint not found', 'SUCCESS' => false];
}

echo json_encode($result);

?>