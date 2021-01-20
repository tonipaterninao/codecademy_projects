const _ = {
    clamp (number, lower, upper) {
    
        // clamp value by the lower bound
        number = Math.max(number, lower);
        // clamp value by the upper bound
        number = Math.min(number, upper);

        return number
    },

    inRange (number, start, end) {
        
        // if no end is provided, use the start as end
        if ( !end ) {
            end = start;
            start = 0;
        }

        // swap the values if start is greater than end
        if (start > end) {
            // placeholder end
            let end_ = end;
            end = start;
            start = end_;
        }

        return (number >= start) && (number < end)
    },

    words (string) {
        return string.split(' ')
    },

    pad (string, length) {
        // Add spaces to beginning and end till difference
        // between string length and parameter length is equal to one
        while (length - string.length > 1) {
            string = ' ' + string + ' ';
        } 
        // If string length still below target length
        // add additional space ad the end
        if (string.length < length) {
            string += ' ';
        }
        return string
    },

    // has (object, key) {
    //     const val = object[key];
    //     if (val == undefined) {
    //         return false
    //     } else {
    //         return true
    //     }
    // } If returning true or false, returnthe expression directly!

    has (object, key) {
        return object[key] != undefined
    },

    invert (object) {
        const res = new Object();
        for (key in object) {
            res[object[key]] = key;
        }
        return res
    },

    findKey (object, predicate) {
        for ([key, value] of Object.entries(object)){
            if (predicate(value)) {
                return key
            }
        }
    },

    drop (array, n=1) {
        return array.slice(n)
    },

    dropWhile (array, predicate) {
        
        // find index of first falsy value
        // const falsyIndex = array.findIndex(element => !predicate(element,
        //     array.findIndex(e => e === element, array) ));

        // We can pass index as the second argument of the anonymous function
        // inside the findIndex call
        const falsyIndex = array.findIndex((element, index) => !predicate(element, index, array));

        return this.drop(array, falsyIndex)
    },

    /** MORE CONCISE SOLUTION FOR CHUNK
    chunk (array, size=1) {
        let res = []
        for (i = 0; i < array.length; i += size) {
            res.push(array.slice(i, i + size))
        }
        return res
    },  */

    chunk (array, size=1) {
        // the temporary array for each chunk
        let chunk = [];
        // the array of chunks
        let res = [];

        for (i = 0; i < array.length; i++) {

            // current item
            const item = array[i]

            if (chunk.length < size) {
                /** If chunk still has some room
                push the current item  */
                chunk.push(item);

            } else if (chunk.length === size) {
                // If chunk is already the desired length
                // push to result array and create new chunk with current item
                res.push(chunk)
                chunk = [item];
            }

            // add last chunk if no more items in array
            // if total no. of items is not a multiple of size
            if (i === array.length - 1) {
                res.push(chunk);
            }
        }

        return res
    }
}

// Do not write or modify code below this line.
// module.exports = _; is not ES6
export default _;