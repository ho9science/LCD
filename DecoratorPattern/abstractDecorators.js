var Macbook = new Interface( "Macbook", 
     ["addEngraving",
     "addParallels",
     "add4GBRam",
     "add8GBRam",
     "addCase"]);

     var MacbookPro = function(){

     };
};

MacbookPro.prototype = {

     addEngraving: function(){
     },
     addParallels: function(){
     },
     add4GBRam: function(){
     },
     add8GBRam: function(){
     },
     addCase: function(){
     },
     getPrice: function(){
          return 900.00;
     }
};

var MacbookDecorator = function( macbook ){
     Interface.ensureImplements( macbook, Macbook );
     this.macbook = macbook;
};

MacbookDecorator.prototype = {
     addEngraving: function(){
          return this.macbook.addEngraving();
     },
     add4GBRam: function(){
          return this.macbook.addParallels();
     },
     add8GBRam: function(){
          return this.macbook.add8GBRam;
     },
     addCase: function(){
          return this.macbook.addCase();
     },
     getPrice: function(){
          return this.macbook.getPrice();
     }
};

function extend( a, b ){
     for( var key in b){
          if(b.hasOwnProperty(key)){
               a[key] = b[key];
          }
     }
     return a;
}

var CaseDecorator = function (macbook){
     this.macbook = macbook;
};

extend( CaseDecorator, MacbookDecorator );

CaseDecorator.prototype.addCase = function(){
     return this.macbook.addCase()+"Adding case to macbook";
};

CaseDecorator.prototype.getPrice = function(){
     return this.macbook.getPrice() + 45.00;
};

var myMacbookPro = new MacbookPro();

console.log( myMacbookPro.getPrice() );

var decoratedMacbookPro = new CaseDecorator( myMacbookPro );

console.log( decoratedMacbookPro.getPrice() );