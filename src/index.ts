import {selectAll} from "unist-util-select";

export const addition = (a: number, b: number) => a + b

export const search = () => {
    const result = selectAll("test")
    return result
}

const main = () => {
    const result = addition(10, 22)
    console.log("Result : ", result);

    const result2 = search()
    console.log("Result2 : ", result2)
}

main()