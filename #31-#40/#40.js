function type(value) {
    const types = {
        "[object String]": "string",
        "[object Number]": "number",
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Date]": "date",
        "[object Undefined]": "undefined",
        "[object Null]": "null"
    }
    return types[{}.toString.call(value)];
}