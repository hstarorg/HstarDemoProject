<?php

function write($path){
  $handle = @fopen($path, 'rb');
	if (FALSE === $handle) {
		exit('404, not found.');
	}
	while (!feof($handle)) {
		echo fread($handle, 8192);
	}
	fclose($handle);
}

$url = urldecode($_SERVER['REQUEST_URI']);
if($url == '/'){
	$url = '/home/index';
}

$controller = '';
$action = '';

$urlParts = mb_split('/', $url);
if(sizeof($urlParts) >= 3){
	$controller = $urlParts[1];
	$action = $urlParts[2];
}
if($controller == ''){
  $controller = 'home';
}
if($action == ''){
  $action = 'index';
}

//有后缀名的处理逻辑
if(mb_strpos($url, '.php') > 0){
  write(mb_substr($url, 1));
}else{//无后缀名的处理逻辑
  write('views/' . $controller . '/' . $action . '.php');
}
?>