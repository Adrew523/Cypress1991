const loginActions = require('../actions/loginActions');
const testData = require('../fixtures/testData.json');

describe('Sample Test', () => {
    it('should login successfully with valid credentials', () => {
        const { username, password } = testData.validUser;
        loginActions.login(username, password);
    });
});
