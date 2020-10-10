function steamrollArray(arr) {

}

steamrollArray([1, [2], [3, [[4]]]]);



/*

[1, [2], [3, [[4]]]]
arr[x][x][x][x]


big idea
1 - loop for the length of the array
  2 - look for an array
    3 - loop through that array until the end
*/