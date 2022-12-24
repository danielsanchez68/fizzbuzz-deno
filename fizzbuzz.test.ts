import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

import fizzbuzz from './fizzbuzz.ts'

Deno.test('deberia dar 0 con una entrada 0', () => {
    const esperado = 0
    const resultado = fizzbuzz(0)
    assertEquals(resultado,esperado)
})

Deno.test('deberia dar 1 con una entrada 1', () => {
    const esperado = 1
    const resultado = fizzbuzz(1)
    assertEquals(resultado,esperado)
})

Deno.test('deberia dar fizz con un múltiplo de 3', () => {
    const esperado = 'fizz'
    const resultado = fizzbuzz(9)
    assertEquals(resultado,esperado)
})

Deno.test('deberia dar fizz con una entrada 7', () => {
    const esperado = 7
    const resultado = fizzbuzz(7)
    assertEquals(resultado,esperado)
})

Deno.test('deberia dar buzz con un múltiplo de 5', () => {
    const esperado = 'buzz'
    const resultado = fizzbuzz(10)
    assertEquals(resultado,esperado)
})    

Deno.test('deberia dar fizzbuzz con un múltiplo de 3 y 5', () => {
    const esperado = 'fizzbuzz'
    const resultado = fizzbuzz(30)
    assertEquals(resultado,esperado)
})    

Deno.test('deberia dar ERROR si la entrada no es numérica', () => {
    const esperado = 'ERROR'
    const resultado = fizzbuzz(true)
    assertEquals(resultado,esperado)
})    
