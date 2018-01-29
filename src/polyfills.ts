import 'core-js/es6/array';
import 'core-js/es6/date';
import 'core-js/es6/function';
import 'core-js/es6/map';
import 'core-js/es6/math';
import 'core-js/es6/number';
import 'core-js/es6/object';
import 'core-js/es6/parse-float';
import 'core-js/es6/parse-int';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es6/regexp';
import 'core-js/es6/set';
import 'core-js/es6/string';
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es6/symbol';
import 'core-js/es6/weak-map';
import 'core-js/es7/reflect';
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone'; // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function(searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0) {
                return false;
            }
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (o[k] === searchElement) {
                    return true;
                }
                k++;
            }
            return false;
        }
    });
}

// ECMA-262, Edition 5, 15.4.4.18
// Référence: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback /*, thisArg*/) {

        var T, k;

        if (this == null) {
            throw new TypeError(' this vaut null ou n est pas défini');
        }

        // 1. Soit O le résultat de l'appel à ToObject
        //    auquel on a passé |this| en argument.
        var O = Object(this);

        // 2. Soit lenValue le résultat de l'appel de la méthode
        //    interne Get sur O avec l'argument "length".
        // 3. Soit len la valeur ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. Si IsCallable(callback) est false, on lève une TypeError.
        // Voir : http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' n est pas une fonction');
        }

        // 5. Si thisArg a été fourni, soit T ce thisArg ;
        //    sinon soit T égal à undefined.
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // 6. Soit k égal à 0
        k = 0;

        // 7. On répète tant que k < len
        while (k < len) {

            var kValue;

            // a. Soit Pk égal ToString(k).
            //   (implicite pour l'opérande gauche de in)
            // b. Soit kPresent le résultat de l'appel de la
            //    méthode interne HasProperty de O avec l'argument Pk.
            //    Cette étape peut être combinée avec c
            // c. Si kPresent vaut true, alors
            if (k in O) {

                // i. Soit kValue le résultat de l'appel de la
                //    méthode interne Get de O avec l'argument Pk.
                kValue = O[k];

                // ii. On appelle la méthode interne Call de callback
                //     avec T comme valeur this et la liste des arguments
                //     qui contient kValue, k, et O.
                callback.call(T, kValue, k, O);
            }
            // d. On augmente k de 1.
            k++;
        }
        // 8. on renvoie undefined
    };
}

// Production steps / ECMA-262, Edition 5, 15.4.4.19
// Référence : https://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

    Array.prototype.map = function(callback /*, thisArg*/) {

        var T, A, k;

        if (this == null) {
            throw new TypeError(' this est null ou non défini');
        }

        // 1. Soit O le résultat de l'appel ToObject avec |this|
        //    comme argument.
        var O = Object(this);

        // 2. Soit lenValue le résultat de l'appel de la méthode interne
        //    Get de O avec l'argument "length".
        // 3. Soit len égal à ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. Si IsCallable(callback) vaut false, on renvoie une TypeError
        // Voir : https://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' n est pas une fonction');
        }

        // 5. Si thisArg a été utilisé, on définit T avec thisArg
        //    sinon T vaudra undefined.
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // 6. Soit A un nouveau tableau créé tel
        //    qu'avec l'expression new Array(len)
        //    où Array est le constructeur natif standard
        A = new Array(len);

        // 7. Soit k égal à 0
        k = 0;

        // 8. On répète tant que k < len
        while (k < len) {

            var kValue, mappedValue;

            // a. Soit Pk égal à ToString(k).
            //    (implicite pour l'opérande gauche de in)
            // b. Soit kPresent le résultat de l'appel à la méthode
            //    interne de O HasProperty appelée avec l'argument
            //     Pk.
            //    Cette étape peut être combinée avec c
            // c. Si kPresent vaut true, alors
            if (k in O) {

                // i. Soit kValue le résultat de l'appel de la méthode
                //    interne Get de O avec l'argument Pk.
                kValue = O[k];

                // ii. Soit mappedValue le résultat de l'appel de la
                //     méthode interne Call de callback avec T comme première
                //     valeur et la liste des arguments kValue, k, et O.
                mappedValue = callback.call(T, kValue, k, O);

                // iii. On appelle la méthode intnerne DefineOwnProperty de A
                // avec les arguments Pk, Property Descriptor
                // { Value: mappedValue,
                //   Writable: true,
                //   Enumerable: true,
                //   Configurable: true },
                // et false.

                // Pour les navigateurs qui supportent Object.defineProperty
                // on pourra utiliser :
                // Object.defineProperty(A, k, {
                //   value: mappedValue,
                //   writable: true,
                //   enumerable: true,
                //   configurable: true
                // });

                // Pour un meilleur suppport, on utilisera :
                A[k] = mappedValue;
            }
            // d. On augmente k de 1.
            k++;
        }

        // 9. On renvoie A
        return A;
    };
}
