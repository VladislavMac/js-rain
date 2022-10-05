class Drop{
    constructor(){
        this.drop = document.createElement('div');
        this.drop.id = 'drop';
        return this.drop;
    }
    width(){
        this.width = Math.random() * (0.3 - 0.2) + 0.2;
        return this.width + 'vw';
    }
    height(){
        this.height = Math.floor(Math.random() * (15 - 5)) + 5;
        return this.height + 'vh';
    }
    x(){
        this.x = Math.floor(Math.random() * (80 - (-50))) + (-50);
        return this.x + 'vw';
    }
    y(){
        this.y = Math.floor(Math.random() * (1500 - 50)) + 50;
        return `-${this.y}vh`
    }
}