export class Permission  {
	
	id: number = 0;
    createdAt: Date = null;
    updatedAt: Date = null;

    createSelf: boolean = false;
    deleteSelf: boolean = false;
    readSelf  : boolean = false;
    updateSelf: boolean = false;

    createOther: boolean = false;
    deleteOther: boolean = flase;
    readOther  : boolean = false;
    updateOther: boolean = false;

}