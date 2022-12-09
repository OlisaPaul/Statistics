The app consist an ES6 classes, that computes descriptive statistics.

The descriptive statistics we are computing are:
Mean (mean)
Median (median)
Mode (mode)
Range (range)
Standard Deviation (standardDeviation)
Mean Deviation (meanDeviation)
Variance (variance)

We are currently using static methods (the names of the methods are in bracket) to compute these. It means we have to call the class directly and use the dot (.) notation to access it

One can use terminal which have node installed to run the app. Once we are in the directory of the app we can run:
node index.js
To get the result.

To compute any of the above, we first have to call the class (Statistics) followed by the method we want to use:
Say we want to compute the mean of the following numbers: 2,4,5,6,7. We can compute and log the result into the console by doing this:

console.log(Statistics.mean([2 , 3, 4, 5, 6, 7]))
The above would be done in the index.js file. An example is shown in the file.

Save the result and run:
node index.js

All the methods only accepts array as an input.
