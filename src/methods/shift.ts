export const shift = (arr:(number | string | boolean | object )[]) => {
    
    const firstElement = arr[0]

    if (arr.length > 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr.length -= 1; 
    }
    
    return {array: arr, firstElement: firstElement}
}