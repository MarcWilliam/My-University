import { MyUniversityPage } from './app.po';

describe('my-university App', () => {
	let page: MyUniversityPage;

	beforeEach(() => {
		page = new MyUniversityPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
