/*
 * jsCalendar language extension v1.0
 * Add Greek Language support
 * Copyright (c) 2017 Grammatopoulos Athanasios-Vasileios
 */

// We love anonymous functions
(function(){

    // Get library
    var jsCalendar = window.jsCalendar;

    // If jsCalendar is not loaded
    if (typeof jsCalendar === "undefined") {
        // If there is no language to load array
        if (typeof window.jsCalendar_language2load === "undefined") {
            window.jsCalendar_language2load = [];
        }
        // Wrapper to add language to load list
        jsCalendar = {
            addLanguage : function (language) {
                // Add language to load list
                window.jsCalendar_language2load.push(language);
            }
        };
    }

    // Add a new language
    jsCalendar.addLanguage({
        // Language code
        // EDIT HERE THE LANGUAGE CODE ~~~~~~~~~~
        code : "ge",
        // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Months of the year
        months : [
            // EDIT HERE THE MONTHS ~~~~~~~~~~~~~
            "იანვარი",
            "თებერვალი",
            "მარტი",
            "აპრილი",
            "მაისი",
            "ივნისი",
            "ივლისი",
            "აგვისტო",
            "სექტემბერი",
            "ოქტომბერი",
            "ნოემბერი",
            "დეკემბერი"
            // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~
        ],
        // Days of the week
        days : [
            // EDIT HERE THE DAYS ~~~~~~~~~~~~~~~
            "კვირა",
            "ორშაბათი",
            "სამშაბათი",
            "ოთხშაბათი",
            "ხუთშაბათი",
            "პარასკევი",
            "შაბათი"
            // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~
        ]
    });

})();