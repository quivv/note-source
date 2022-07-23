//Format dấu phải phân cách phần ngàn 
const format = (currency: number) => {
  return currency.toFixed(0).replace(/./g, function (c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
};

export default format;