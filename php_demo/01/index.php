<?php
  mb_internal_encoding('UTF-8');

  mb_http_output('UTF-8');
?>
<!doctype html>
<html>
  <head>
    <title>Php Info</title>
  </head>
  <body>
    <?php
      phpinfo();
    ?>
  </body>
</html>