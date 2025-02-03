
export const push = (arr:( number | string | boolean | object)[], el:(number | string | boolean | object)) => {
     arr[arr.length] = el
     return arr
}

