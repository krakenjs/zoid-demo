/* @flow */

import { LoginZoidComponent } from '../../src';

describe('button cases', () => {

    it('should render the component and log in', (done) => {

        const body = document.body;
        if (!body) {
            throw new Error(`Expected body to be present`);
        }

        const email = 'foo@bar.com';

        LoginZoidComponent({

            env: 'test',

            prefilledEmail: email,

            onLogin(loginEmail : string) : void {

                if (loginEmail !== email) {
                    return done(new Error(`Expected ${ loginEmail } to be ${ email }`));
                }

                return done();
            }

        }).render(body);
    });
});
