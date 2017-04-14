/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace Registration {
    import User = User.User;

    import SEntity = core.SEntity;

    /**
     * sections or groups
     * ex: Group A ,
     * Section A3 would have A as parent
     */
    export class Group extends SEntity {
        parent : Group;

        name : string;

        description : string;

        /**
         * max number of students for this group
         */
        maxStudent : number;

        students : User[];

        constructor() {
            super();
            this.maxStudent = 0;
        }
    }
    Group["__class"] = "Registration.Group";

}

