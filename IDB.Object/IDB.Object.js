//IDB를 위해서 이렇게 까지 구조를 분리할 필요는 없는 것 같지만 일단 이렇게 해본다.
class Object {
  constructor(id){
    this.id = id;
    this.position = {
      x: 50,
      y: 50
    }
    this.scale = {
      width: 50,
      height: 50
    }
    this.image = null;
  }

  //객체를 그리는 기능. Object를 상속하는 객체는 각자 draw를 구현하게 된다.
  draw(ctx){
    ctx.fillRect(this.position.x, this.position.y, this.scale.width, this.scale.height);
    ctx.drawImage(this.image, 0, 0)
  }
}