<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PHP语法测试</title>
</head>
<body>
  <?php
    $a = '我是字符串'; //定义字符串（单引号，双引号皆可）
    echo $a, '<br>';
    $a = 10; // 我的整数
    echo $a, '<br>';
    $a = 0x10; // 定义16进制整数
    echo $a, '<br>';
    $a = 010; // 定义8进制整数
    echo $a, '<br>';
    $a = 0.1; // 浮点数
    echo $a, '<br>';
    $a = 8E-5; // 指数形式定义浮点数
    echo $a, '<br>';
    $a = true; // Bool类型，只有true,false，注意不区分大小写，写成True，TrUe都没问题。
    echo $a, '<br>';
    $a = NuLL; // NULL类型只有一个null值，同样不区分大小写。
  ?>
  <hr>
  <?php
    $arr = ['item1', 'item2'];
    print_r($arr);
    echo '<br>'; 
    $arr = array('item1', 'item2');
    print_r($arr);
    echo '<br>'; 
    //仅能通过下标访问
    echo '$arr第一个元素是：', $arr[0], '<br><br>';

    $arr = ['key1' => 'value1', 'key2' => 'value2'];
    print_r($arr);
    echo '<br>';
    $arr = array('key1' => 'value1', 'key2' => 'value2');
    print_r($arr);
    echo '<br>';
    // 通过key访问
    echo '$arr的key1值是：', $arr['key1'], 'key2值是：', $arr['key2'], '<br><br>';

    $arr = ['key1' => ['a', 'b'], 'key2' => ['c', 'd']];
    print_r($arr);
    echo '<br>';
    $arr = array('key1' => array('a', 'b'), 'key2' => array('c', 'd'));
    print_r($arr);
    echo '<br>';
    // 根据数组类型，通过key或者是下标访问
    echo $arr['key1'][0], $arr['key2'][1];
  ?>
<hr>
  <?php
    class User{
      var $userName;
      function setName($name){
        $this->userName = $name;
      }
      function getName(){
        return $this->userName;
      }
    }

    $user = new User();
    $user->setName('Jay');
    echo $user->getName();
  ?>
<hr>
  <?php
    $name = 'Jay';
    echo 'My name is {$name}';
    echo "My name is {$name}";
    print 'My name is {$name}';
    print "My name is {$name}";
  ?>
<hr>
  <?php
    function fun(){
      $funName = 'fun1';
      echo $funName;
    }
    fun();
    echo $funName;
  ?>
<hr>
  <?php
    $appName = 'test';

    function fun1(){
      global $appName;
      echo $appName;
    }

    fun1();
  ?>
<hr>
  <?php
    function funs(){
      $id = 1;
      static $static_id = 1;
      echo '$id = ', $id, ', $static_id=', $static_id, '<br>';
      $id++;
      $static_id++;
    }
    funs();
    funs();
  ?>
</body>
</html>