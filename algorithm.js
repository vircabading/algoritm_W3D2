const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";


// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string to be turned into an acronym.
//  * @returns {string} The given str converted into an acronym.
//  */
function acronymize(str) {
    var acronym = "";

    if (str[0] != " ") {                    // Edge Case
        acronym += str[0];
    }

    for (var i=0; i < str.length; i++) {    // loop through the string

        if (str[i] == " ") {
            acronym += str[i+1];
            // console.log(acronym);
        }
    }
    return acronym.toUpperCase();

}

console.log(acronymize ("Live from New York, it's Saturday Night!"));