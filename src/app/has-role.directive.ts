import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective implements OnInit{

  private currentRole: string = '';

  @Input('hasRole') set role(role: string) {
    this.currentRole = role;
    this.updateView();
  }

  isAdmin(): boolean {
    return this.currentRole.toLowerCase() === 'admin';
  }

  updateView() {
    if (this.isAdmin()) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

  constructor(private _viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  ngOnInit(): void {
        this.updateView();
    }

}
