
    /**
     * interface for any object with search functionality
     */
    export interface Searchable<T> {
        /**
         * search in the DB for matched
         * 
         * @param query the search query
         * @return array containing all the results
         */
        search(query : string) : T[];
    }