const expect = require ('chai').expect





describe('app', function () {
    it('my first test', function () {
        console.error('hello')

    })

})

const firstItem = array => {
    if (array && array.length) {
        return array[0]
    }
}