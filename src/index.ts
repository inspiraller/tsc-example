type mystring = string;

type TFunc = (x: mystring) => string;

const func: TFunc = (str) => str + str;

const get = () => func('hello');

export default get;
