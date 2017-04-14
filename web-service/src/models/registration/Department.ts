/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace Registration {
    import UpFile = Files.UpFile;

    import SEntity = core.SEntity;

    /**
     * Department can be Faculty of CS or English Department ...etc
     */
    export class Department extends SEntity {
        /**
         * parent used for major / minor
         */
        parent : Department;

        name : string;

        description : string;

        LogoImg : UpFile;

        constructor() {
            super();
        }
    }
    Department["__class"] = "Registration.Department";

}

