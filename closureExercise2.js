// Make it so that the initialize function can only be called once!
let view;
function initialize() {
    let called = 0
    return function () {
        if(called === 0) {
            view = '🏔';
            console.log('view has been set!')
            called++
        } else {
            return
        }
    }
}

const calledOnce = initialize();
calledOnce()
calledOnce()

console.log(view)