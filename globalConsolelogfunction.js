global.debugVar = function (varNames) {
  let strX = "   ";
  function replacer(key, value) {
    if (value === undefined) {
      return "undef";
    }
    return value;
  }
  for (let arg of arguments) {
    let lastChar;
    if (typeof arg !== "string") {
      let _arg = JSON.stringify(arg, replacer);
      _arg = _arg.replace(" {", "");
      _arg = _arg.replace("} ", "");
      _arg = _arg.replace(/:/g, " : ");
      // _arg = _arg.replace("  ", " \n ");
      // _arg = _arg.replace(/"/g, " ");
      strX += _arg;
    } else {
      strX += arg;
      lastChar = arg[arg.length - 1];
    }
    if (arg !== arguments[arguments.length - 1] && lastChar !== ":") {
      strX += " ";
    }
  }
  console.log("\x1b[1m\x1b[33mLogger\x1b[0m", "\x1b[32m\x1b[5m" + strX + "\x1b[0m");
};
