function faktorijel(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let faktorijelVrednost = 1;
        for (let i = 2; i <= n; i++) {
            faktorijelVrednost *= i;
        }
        return faktorijelVrednost;
    }
}


const broj = 5;
const rezultat = faktorijel(broj);
console.log(`Faktorijel broja ${broj} je ${rezultat}`);
1