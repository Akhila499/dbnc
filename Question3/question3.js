const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream("./inputdata.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
    let initialValue = 0;
    let sum = results.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue["value"]),
      initialValue
    );

    console.log("sum", sum);
    return sum;
  });
