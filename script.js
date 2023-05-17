// II.01. First we're going to bring in the counters:
// NOTE: This is going to give us a nodelist (which is similar to an array) => So we can loop it over!
const counters = document.querySelectorAll('.counter');

// II.02. We're looping the counters:
// NOTE: For each counter we're setting the innerText to 0 for start
counters.forEach(counter => {
    // NOTE: Even though the it's a number, we have to use it as a string.
    counter.innerText = '0';
    // II.03. Adding function: (NOTE: We want to get the data-target from the div with that)
    const updateCounter = () => {
        // NOTE: We can get the data-target by using ".getAttribute()" => Not document.getAttribute, but counter.getAttribute()!!
        // EXTRA-NOTE: We can add, "Number", or "parseInt()", or a "+" before counter => It will turn it into number from string!
        const target = +counter.getAttribute('data-target');
        // Testing: (NOTE: typeof will tell us what target is, and the value of the target)
        // NOTE: We should come back a string, and the numbers we've added to data-tatget
        // console.log(typeof target, target);
        // II.05. We create a var c: (NOTE: This is gonna be whatever it is in the inner text, and we add + to turn it into a number)
        const c = +counter.innerText;
        // II.06. We create a var increment: (NOTE: By changing the number here, we can change how fast, or slow the counter should be!)
        const increment = target / 200;
        // Testing:
        // console.log(increment);
        // II.07. Adding an if statement:
        // NOTE: If c is less than the target we're setting the counter's innerText to c + increment
        if (c < target) {
            // NOTE: We're rounding this number with Math.ceil() => It'll render the round numbers to innerText!
            counter.innerText = `${Math.ceil(c + increment)}`;
            // II.08. We're using a setTimeOut() to increment the number until it reaches the data-target:
            // NOTE: We're calling the updateCounter in it, and wait 1 millisecond before we run it.
            setTimeout(updateCounter, 1);
        } else { // NOTE: Else, the innertext just equals to the target number 
            counter.innerText = target;
        }

    }
    // II.04. We have to call this function:
    updateCounter();
})




