let _ = require('lodash');
let {loadIdAndPassword} = require('./id-passage');
class Judge{
    judge(inputId,inputPassword){
        let aa = new Mate();
        let idAndPasswords = loadIdAndPassword();
        let find = aa.getMateIdAndPassword(inputId,idAndPasswords);

        if(find === undefined){
            return 'id is false!';
        }else {
            if(inputPassword === find.password){
                return 'input ture!'
            }else {
                return 'password is false!'
            }
        }
    }
}

class Mate{
    getMateIdAndPassword(input,idAndPasswords){
        return  _.find(idAndPasswords, (idAndPassword)=> idAndPassword.id === input);
    }
}

module.exports = {
    Judge
}