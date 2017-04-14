/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace Registration {
    /**
     * calculate the user gpa & completed credit hours from this Courses Registration
     */
    export class GradeTranscript {
        cources : CourseRegistration[];

        totalCreditHours : number;

        totalGPA : number;

        /**
         * calculate the user GPA
         * 
         * @return the user GPA
         */
        public calculateGPA() : number {
            return null;
        }

        /**
         * fetch the Grade transcript from DB by user ID
         * 
         * @param user_id the user ID
         * @return the grade transcript
         */
        public static readGradeTranscript(user_id : number) : GradeTranscript {
            return null;
        }

        constructor() {
            this.totalCreditHours = 0;
            this.totalGPA = 0;
        }
    }
    GradeTranscript["__class"] = "Registration.GradeTranscript";

}

