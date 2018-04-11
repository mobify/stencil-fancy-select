/**
 * Describes the data input for a component’s dust template
 *
 * Validation is done using https://github.com/molnarg/js-schema/
 */

define(['$'], function ($) {

    return {
        'select': $("<select><option>Value</option><option>Value</option></select>")
    };
});
