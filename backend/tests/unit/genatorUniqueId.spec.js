const genatorUniqueId = require('../../src/utils/generatorUniqueId');


describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = genatorUniqueId();

        expect(id).toHaveLength(8);
    });
});