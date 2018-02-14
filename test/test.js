var packer = require('../packer');
var assert = require('assert');





describe("main", function() {

    it("empty", function(){
        let base62 = true;
        let shrink = false;
        let phrase = null;

        let packed_data = packer.pack("", base62, shrink, phrase);
        assert.equal(packed_data, "eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('',2,0,''.split('|'),0,{}))");
    } );

    it("1=a", function(){
        let base62 = true;
        let shrink = false;
        let phrase = null;

        let packed_data = packer.pack("1+a", base62, shrink, phrase);
        assert.equal(packed_data, "eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('1+0',2,2,'\\x61|'.split('|'),0,{}))");
    } );

    it("empty, with phrase", function(){
        let base62 = true;
        let shrink = false;
        let phrase = "abcdef";
        let packed_data = packer.pack("", base62, shrink, phrase);
        assert.equal(packed_data, "eval(function(a,b,c,d,e,f){e=String;if(!''.replace(/^/,String)){while(c--)f[c]=d[c]||c;d=[function(e){return f[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(d[c])a=a.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),d[c]);return a}('',2,0,''.split('|'),0,{}))");
    } );


});
