/*jshint esversion: 6 */

//problem 1
var initialSize = 10;
var stackArray = Array(initialSize);
var currentSize = 0;

function push(number) {
  if (currentSize == initialSize) {
    enlargeArray();
  }

  stackArray[currentSize] = number;
	currentSize++;
}

function pop() {
  var popped = -404;
  if (currentSize == 0) {
    console.log("No items to pop!");
	}
		popped = stackArray[currentSize - 1];
		stackArray[currentSize - 1] = 0;
		currentSize--;
		return popped;
}

function peek() {
		var stackPeek = -404;
		if (currentSize == 0) {
			console.log("No items to return!");
		}

		stackPeek = stackArray[currentSize - 1];
		return stackPeek;
	}

  function reverse() {
		if (currentSize == 0) {
			console.log("Nothing to reverse!");
			return;
		}
		var reversedStack = Array(stackArray.length);
		for (var i = (currentSize - 1); i >= 0; i--) {
			reversedStack[(currentSize - 1 - i)] = stackArray[i];
		}

		stackArray = reversedStack;
	}


  function empty() {
    if (currentSize == 0) {
      return true;
    } else {
      return false;
    }
  }

  function enlargeArray() {
		var newSize = currentSize + 5;
		var newStackArray = Array(newSize);

		for (var i = 0; i < stackArray.length; i++) {
			newStackArray[i] = stackArray[i];
		}
		stackArray = newStackArray;
	}


//problem 2
var initialSize = 10;
var queueArray = Array(initialSize);
var currentSize = 0;

function push(number) {
  if (currentSize == initialSize) {
    enlargeArray();
  }

  queueArray[currentSize] = number;
	currentSize++;
}

function pop() {
  var popped = -404;
  if (currentSize == 0) {
    console.log("No items to pop!");
	}
		popped = queueArray[0];
    queueArray[0] = 0;
    poppedArray = Array(currentSize - 1);

    for (var i = 0; i < (currentSize - 1); i++) {
      poppedArray[i] = queueArray[i + 1];
    }
    queueArray = poppedArray;
		currentSize--;
		return popped;
}

function peek() {
		var queuePeek = -404;
		if (currentSize == 0) {
			console.log("No items to return!");
		}

    queuePeek = queueArray[0];
		return queuePeek;
	}

  function reverse() {
		if (currentSize == 0) {
			console.log("Nothing to reverse!");
			return;
		}
		var reversedQueue = Array(queueArray.length);
		for (var i = (currentSize - 1); i >= 0; i--) {
			reversedQueue[(currentSize - 1 - i)] = queueArray[i];
		}

		queueArray = reversedQueue;
	}


  function empty() {
    if (currentSize == 0) {
      return true;
    } else {
      return false;
    }
  }

  function enlargeArray() {
		var newSize = currentSize + 5;
		var newqueueArray = Array(newSize);

		for (var i = 0; i < queueArray.length; i++) {
			newqueueArray[i] = queueArray[i];
		}
		queueArray = newqueueArray;
	}


//problem 4
function matrixSum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; i < arr[i].length; j++) {
      if ((i + j) <= (arr.length - 1)) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}

var a = [
	  [5, 9, 7, 8, 6],
    [1, 2, 3, 7, 9],
    [8, 9, 7, 5, 3],
    [9, 8, 2, 0, 1],
    [0, 8, 5, 7, 3]
];

var result = matrixSum(a);
console.log(result);
