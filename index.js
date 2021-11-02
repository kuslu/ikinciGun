function addToCart(quantity, productName="Elma"){
  console.log("Sepete eklendi:" + productName + " adet : " + quantity)
}

addToCart(10, "Elma")
//addToCart("Armut")
//addToCart("Kel Mahmut")


let dolarDun=9.50
let sayHello = () => {
  console.log("Hello World")
}

sayHello()

let sayHello2 = function (){
  console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice){ //farklı yerlerden çağırdığımız zaman ilkönce ne göndermemiz gerektiğini unutabiliriz. Bunun yerine addToCart3 teki gibi obje oluşturup göndermemiz gerekir.

}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)


let product1={productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product){
  console.log("Ürün : "+product.productName)
  console.log("Adet : " + product.quantity)
  console.log("Fiyat : " + product.unitPrice)
}
addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCart4(products){
  console.log(products)
}

let products = [
  {productName:"Elma",unitPrice:10,quantity:5},
  {productName:"Armut",unitPrice:10,quantity:5},
  {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(bisey, ...numbers){ //... rest operatörü. geriye kalan bütün parametreler anlamında
  let total = 0
  for (let i=0;i<numbers.length;i++){
    total=total + numbers[i]
  }
    console.log(total)
  }
add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
  {name:"İç Anadolu", population:"20M"},
  {name:"Marmara", population:"30M"},
  {name:"Karadeniz", population:"10M"}, 
  [
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"]
  ]
  ]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName,  unitPrice:newUnitPrice,  quantity:newQuantity} = {productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)