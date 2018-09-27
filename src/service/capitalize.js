const Capitalize = string => {
  let str = string.toString();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default Capitalize;
