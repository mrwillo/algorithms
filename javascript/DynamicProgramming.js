function fib(n) {
    if (n < 2) return 1;
    return fib(n-1) + fib(n-2)
}

function testFib() {
    console.log('fib test 1: ', fib(0));
    console.log('fib test 2: ', fib(1));
    console.log('fib test 3: ', fib(2));
    console.log('fib test 4: ', fib(3));
}
testFib();

function fib_memoize(n, memoize) {
    if (memoize[n]) return memoize[n];
    if (n < 2) return 1;
    memoize[n] = fib_memoize(n-1,memoize) + fib_memoize(n-2, memoize);
    return memoize[n];
}
function testFibMemoize() {
    console.log('fib_memoize test 1: ', fib_memoize(0,{}));
    console.log('fib_memoize test 2: ', fib_memoize(1,{}));
    console.log('fib_memoize test 3: ', fib_memoize(2,{}));
    console.log('fib_memoize test 4: ', fib_memoize(3,{}));
}
testFibMemoize()

function fib_bottomUp(n) {
    if (n<2) return 1;
    let bottomUp = [];
    bottomUp[0] = 1;
    bottomUp[1] = 1;
    for (let i=2; i<=n; i++) {
        bottomUp[i] = bottomUp[i-1] + bottomUp[i-2];
    }
    return bottomUp[n];
}

function testFibBottomUp() {
    console.log('fib_bottomUp test 1: ', fib_bottomUp(0));
    console.log('fib_bottomUp test 2: ', fib_bottomUp(1));
    console.log('fib_bottomUp test 3: ', fib_bottomUp(2));
    console.log('fib_bottomUp test 4: ', fib_bottomUp(3));
}
testFibBottomUp();
