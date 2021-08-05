const itemsCounter = require('../itemsCounter')
const fetchPics = require('../fetch.js')
const getComments = require('../get')






describe('Counters work good',()=>{
    test('Items Counter works',()=>{
 
             const toBuildArray = [];
             const breedCats = ['abys', 'aege', 'abob', 'amau', 'amis', 'bamb', 'bslo', 'cspa', 'beng'];
             const api = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
             fetchPics(api, breedCats, toBuildArray);
            expect(countItems(toBuildArray)).toEqual(9)
    })
})