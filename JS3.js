function createCounter(initialValue) {
  let count = initialValue;

  const counter = {
    increment() {
      count++;
      // Assuming you have a DOM element with id 'counter-display'
      document.getElementById('counter-display').textContent = count;
    },
    decrement() {
      if (count > 0) {
        count--;
        document.getElementById('counter-display').textContent = count;
      }
    },
    getValue() {
      return count;
    }
  };

  return counter;
}

// Example usage:
const myCounter = createCounter(10);

// Increment and decrement the counter
myCounter.increment();
myCounter.decrement();
myCounter.decrement();

// Access the current value
console.log(myCounter.getValue()); // Output: 8
