let {Judge}=require('../scr/judge');

describe('judgeId',()=>{
    let aa = new Judge();
    it('judgeture',()=>{
        let inputId = 'xubingxu';
        let inputPassword = '123456';
        let result = 'input ture!';
        let expects = aa.judge(inputId, inputPassword);
        expect(expects).toEqual(result);
    });

    it('judge id is false',()=>{
        let inputId = 'mareiqi';
        let inputPassword = '123456';
        let result = 'id is false!';
        let expects = aa.judge(inputId,inputPassword);
        expect(expects).toEqual(result);
    });

    it('judge password is false',()=>{
        let inputId = 'xubingxu';
        let inputPassword = '1234567';
        let result = 'password is false!';
        let expects = aa.judge(inputId,inputPassword);
        expect(expects).toEqual(result);
    });
});