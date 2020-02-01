const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push (function () {
        console.log (i)
    })
}
// i será 10 em qualquer posição em funcs,
// porque var não respeita o escopo do loop.
funcs [2] ()
funcs [8] ()