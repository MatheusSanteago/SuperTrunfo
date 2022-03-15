var card1 = {nome:"Messi",url: "https://sortitoutsi.net/uploads/face/7458500.png",atributes: {Drible: 95,Defesa: 34,Chute: 92,}};
var card2 = {nome:"Cristiano Ronaldo", url:"https://sortitoutsi.net/uploads/face/735216.png",atributes: {Drible: 88,Defesa: 34,Chute: 93,}};
var card3 = {nome:"Neymar",url:"https://sortitoutsi.net/uploads/face/19024412.png",atributes: {Drible: 94,Defesa: 37,Chute: 83,}};  
var card4 = {nome:"Kimmich",url:"https://sortitoutsi.net/uploads/face/92039023.png",atributes: {Drible: 84,Defesa: 83,Chute:73,}};  
var card5 = {nome:"Lewandowski",url:"https://sortitoutsi.net/uploads/face/719601.png",atributes: {Drible: 94,Defesa: 37,Chute: 83,}};     
var card6 = {nome:"De Bruyne",url:"https://sortitoutsi.net/uploads/face/18004457.png",atributes: {Drible: 88,Defesa: 64,Chute: 86,}};  
var card7 = {nome:"Mbappé",url:"https://sortitoutsi.net/uploads/face/85139014.png",atributes: {Drible: 92,Defesa: 36,Chute: 88,}};  
var card8 = {nome:"Van Dijk",url:"https://sortitoutsi.net/uploads/face/37024025.png",atributes: {Drible: 64,Defesa: 37,Chute: 83,}};  
var card9 = {nome:"Kanté",url:"https://sortitoutsi.net/uploads/face/85081880.png",atributes: {Drible: 82,Defesa: 87,Chute: 66,}};  
var card10 = {nome:"Casemiro",url:"https://sortitoutsi.net/uploads/face/19061518.png",atributes: {Drible: 73,Defesa: 86,Chute: 73,}};  
var card11 = {nome:"Varane",url:"https://sortitoutsi.net/uploads/face/85075627.png",atributes: {Drible: 65,Defesa: 87,Chute: 49,}}; 

var newCard = JSON.parse(localStorage.getItem('cards',cards));
var cards = [card1,card2,card3,card4,card5,card6,card7,card8,card8,card9,card9,card10,card11];

 if (newCard.length > cards.length){
     cards = newCard;
 } else {
    var cards = [card1,card2,card3,card4,card5,card6,card7,card8,card8,card9,card9,card10,card11];
 }
