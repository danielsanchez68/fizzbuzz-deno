// deno-lint-ignore-file no-explicit-any
const fizzbuzz = (num:any) => {
    if(typeof num != 'number') return 'ERROR'

    const divisiblePor = (num:number,div:number) => num % div == 0
    
    let sal = ''
    if(num && divisiblePor(num,3)) sal += 'fizz'
    if(num && divisiblePor(num,5)) sal += 'buzz'

    return sal? sal : num
}

export default fizzbuzz