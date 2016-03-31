import {Component} from 'angular2/core';

@Component({
  selector: 'hello_world', //此处指明了组件的标记，我们就可以使用<hello_world></hello_world>来使用这个组件了。
  templateUrl: 'components/hello_world.html'
})
//export的意思是导出这个组件，在使用的地方，就可以使用import {xx} from 'xxx'来获取到了。
export class HelloWorldComponent{
  constructor(){
    
  }
}