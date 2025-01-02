import { HasRoleDirective } from './has-role.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('HasRoleDirective', () => {
  let mockViewContainerRef: ViewContainerRef;
  let mockTemplateRef: TemplateRef<any>;

  beforeEach(() => {
    mockViewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['createEmbeddedView', 'clear']);
    mockTemplateRef = {} as TemplateRef<any>;
  });

  it('should create an instance', () => {
    const directive = new HasRoleDirective(mockViewContainerRef, mockTemplateRef);
    expect(directive).toBeTruthy();
  });
});
