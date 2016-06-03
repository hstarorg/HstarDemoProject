<?php
  // Tell PHP that we're using UTF-8 strings until the end of the script
  mb_internal_encoding('UTF-8');

  // Tell PHP that we'll be outputting UTF-8 to the browser
  mb_http_output('UTF-8');
  
  header('Content-Type: application/json');
  header('Location: ./../success.php');
  exit();
?>