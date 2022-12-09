class Statistics {
  constructor(value, errorMesage) {
    this.value = value;
  }

  static errorMesage = "Please provide an array argument";

  static numOfItems(array) {
    return array.length;
  }

  static mean = (array = []) => {
    if (!array.length) return this.errorMesage;

    const { length: numOfItems } = array;
    const total = array.reduce((a, b) => a + b, 0);

    const mean = total / numOfItems;

    return mean;
  };

  static median = (array = []) => {
    if (!array.length) return this.errorMesage;

    const { length: numOfItems } = array;

    const mid = Math.floor(numOfItems / 2),
      sortedArray = [...array].sort((a, b) => a - b);

    const median =
      numOfItems % 2 !== 0
        ? sortedArray[mid]
        : (sortedArray[mid - 1] + sortedArray[mid]) / 2;

    return `Your Median: ${median}`;
  };

  static mode = (array) => {
    if (!array.length) return this.errorMesage;

    const frequency = {};
    array.forEach(function (item) {
      frequency[item] = frequency[item] + 1 || 1;
    });

    const sortedItems = Object.entries(frequency).sort((a, b) => a[1] - b[1]);
    const numOfItems = sortedItems.length - 1;
    const mode = sortedItems[numOfItems][0];

    return "Mode: " + +mode;
  };
  static range = (array) => {
    if (!array.length) return this.errorMesage;

    const sortedArray = array.sort((a, b) => a - b);
    const numOfItems = sortedArray.length;
    const highestValue = sortedArray[numOfItems - 1];
    const lowestValue = sortedArray[0];
    const range = highestValue - lowestValue;

    return `Your range: ${range}`;
  };
  static variance = (array = []) => {
    if (!array.length) return this.errorMesage;

    const mean = this.mean(array);

    const { length: numOfItems } = array;
    let variance = 0;

    array.forEach((num) => {
      variance += (num - mean) * (num - mean);
    });

    variance /= numOfItems;
    return variance;
  };
  static standardDeviation = (array = []) => {
    if (!array.length) return this.errorMesage;

    const variance = this.variance(array);
    const standardDeviation = Math.sqrt(variance);

    return `Your Standard Deviation: ${standardDeviation}`;
  };
  static meanDeviation = (array = []) => {
    if (!array.length) return this.errorMesage;

    const mean = this.mean(array);
    const { length: numOfItems } = array;

    const deviation = array
      .map((item) => Math.abs(item - mean))
      .reduce((a, b) => a + b, 0);

    const meanDeviation = deviation / numOfItems;

    return `Your Mean Deviation: ${meanDeviation}`;
  };

  static quartileDeviation = (array = []) => {
    if (!array.length) return this.errorMesage;

    const numOfItems = this.numOfItems(array);

    const position = Math.floor(numOfItems / 4);
    const sortedArray = [...array].sort((a, b) => a - b);

    const firstQuartile =
      numOfItems % 4 !== 0
        ? sortedArray[position]
        : (sortedArray[position - 1] + sortedArray[position]) / 2;

    const thirdQuartile =
      numOfItems % 4 !== 0
        ? sortedArray[position * 3]
        : (sortedArray[position * 3 - 1] + sortedArray[position * 3]) / 2;

    const quartileDeviation = (thirdQuartile - firstQuartile) / 2;

    return `Your Quartile Deviation: ${quartileDeviation}`;
  };
}

console.log(Statistics.mean([1, 2, 3, 4, 5]));
console.log(Statistics.median([1, 7, 8, 2, 15, 6]));
console.log(
  Statistics.mode([1, 7, 8, 2, 15, 6, 3, 3, 5, 4, 5, 6, 5, 8, 4, 3, 7, 3])
);
console.log(
  Statistics.range([1, 7, 8, 2, 15, 6, 3, 3, 5, 4, 5, 6, 5, 8, 4, 3, 7, 3])
);
console.log(Statistics.variance([4, 6, 7, 8, 9, 10, 10]));
console.log(Statistics.standardDeviation([4, 6, 7, 8, 9, 10, 10]));

console.log(Statistics.quartileDeviation(64));

console.log(Statistics.meanDeviation([2, 3, 4, 5, 6, 7]));
