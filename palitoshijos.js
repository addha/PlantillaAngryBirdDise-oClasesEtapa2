class Palitoshijos extends PacajaPalitos{
    constructor(x,y,a,at,angle){
        super(x,y,20,at,angle);
        this.image = loadImage("./Imagenes/wood3.png");
        Matter.Body.setAngle(this.body,angle)
    }
    display(){
        super.display()
    }
}