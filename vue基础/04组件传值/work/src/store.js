export default {
    state: {
        fruits: [
            {
                name:"香蕉",
                price:3.2,
                quantity:0
            },
            {
                name:"苹果",
                price:2.2,
                quantity:0
            },
            {
                name:"鸭梨",
                price:3,
                quantity:0
            }
        ]
    },
    reset(){
     this.state.fruits.map(v =>{
         v.quantity = 0;
     })
    },
    sub(i){
        if(this.state.fruits[i].quantity>0)
        this.state.fruits[i].quantity--;
    },
    add(i){
        this.state.fruits[i].quantity++;
    }
}