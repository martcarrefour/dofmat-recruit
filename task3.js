var foo = function(x) {
    console.log( x > 0 ? x* foo(--x) : 1)
}


let foo2 = function(x){
    if (x > 1) {
        x *= x - 1
        --x
        return x
    }

    else return x = 1
}

foo2(1)