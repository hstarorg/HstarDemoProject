import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';

@Directive({
  selector: 'router-outlet'
})

export class CustomRouterOutlet extends RouterOutlet {

  private parentRouter: Router;

  constructor(_viewContainerRef: ViewContainerRef, _loader: DynamicComponentLoader,
    _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_viewContainerRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
  }

  activate(instruction: ComponentInstruction) {
    let url = instruction.urlPath;
    console.log('custom router-outlet:', url);
    let isLogged = true;
    if (!isLogged) {
      this.parentRouter.navigateByUrl('/login');
    }
    return super.activate(instruction);
  }
}