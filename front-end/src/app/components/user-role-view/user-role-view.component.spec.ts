import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleViewComponent } from './user-role-view.component';

describe('UserRoleViewComponent', () => {
	let component: UserRoleViewComponent;
	let fixture: ComponentFixture<UserRoleViewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserRoleViewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserRoleViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
