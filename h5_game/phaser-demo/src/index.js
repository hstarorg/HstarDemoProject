class MyFirstPhaserGame {
  constructor() {
    new Phaser.Game(800, 600, Phaser.CANVAS, 'content', { preload: this.preload, create: this.create, update: this.update, render: this.render });
  }

  preload() {
    this.game.load.image('bullet', 'static/sprites/bullet.png');
    this.game.load.image('ship', 'static/sprites/shmup-ship.png');
    this.game.load.image('background', 'static/sprites/starfield.jpg');
  }

  create() {
    //计数器
    this.counter = 0;

    // 设置世界大小
    this.game.world.setBounds(0, -600, 800, 1200);

    // 背景图
    this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
    console.log(this.background);

    // 设置好子弹
    this.weapon = this.game.add.weapon(300, 'bullet');
    // 子弹消失类型
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    // 设置子弹速度
    this.weapon.bulletSpeed = 300;
    // 子弹旋转90度
    this.weapon.bulletAngleOffset = 90;
    // 开火比例
    this.weapon.fireRate = 60;

    // 将飞机（ship）添加到游戏中，坐标（320, 500）
    this.sprite = this.game.add.sprite(386, 500, 'ship');
    // 启用给精灵（飞机）
    this.game.physics.arcade.enable(this.sprite);
    // 让子弹以飞机为起点
    this.weapon.trackSprite(this.sprite, 14, 0);

    // 获取键盘
    this.cursors = this.game.input.keyboard.createCursorKeys();
    // 开火按钮
    this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  }

  update() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
    if (this.cursors.left.isDown) {
      if (this.sprite.body.position.x > 0) {
        this.sprite.body.velocity.x = -200;
      }
    } else if (this.cursors.right.isDown) {
      if (this.sprite.body.position.x < 800 - 28) {
        this.sprite.body.velocity.x = 200;
      }
    } else if (this.cursors.up.isDown) {

      if (this.sprite.body.position.y > 5) {
        this.sprite.body.velocity.y = -200;
        // this.sprite.body.position.y -= 4;
      }
    } else if (this.cursors.down.isDown) {
      // this.game.camera.y += 4;
      if (this.sprite.body.position.y < 600 - 21) {
        this.sprite.body.velocity.y = 200;
        // this.sprite.body.position.y += 4;
      }
    }
    if (this.fireButton.isDown || true) { // || true,自动开火
      // 开火
      this.counter++;
      if (this.counter % 5 === 0) {
        this.weapon.fire();
      }
    }
    this.background.position.y -= 4;
    // this.game.camera.y += 5;
  }

  render() {
    // 开启子弹监控视图
    this.weapon.debug();
    // 开启摄像机监控视图
    this.game.debug.cameraInfo(this.game.camera, 15, 500);
  }
}

// 启动游戏
new MyFirstPhaserGame();