/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    if(numRows === 1) return [[numRows]]; 
    
    let result = [];
    
    for(let x = 1; x <= numRows; x++) {
        let arr = [];
        for(let y = 0; y < x; y++) {
            if(y === 0 || y === x-1) {
                arr.push(1);
            }else{
                arr.push((result[x-2][y-1] + result[x-2][y]));
            }
        }
        result.push(arr);
    }
    return result;
};