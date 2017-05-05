
export interface IController {
	create();

	update();

	delete();

	read(primaryKey: any);
}