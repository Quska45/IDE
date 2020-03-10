//IDB를 위해서 이렇게 까지 구조를 분리할 필요는 없는 것 같지만 일단 이렇게 해본다.
class Object2D {
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
  //솔루션은 그렇게 개발되어 있지만 나는 일단 Rect로만 하려고 한다.
  draw(ctx){
    //윤곽선만 있는 rect를 그린다. fillRect는 채워진 rect를 그린다.
    ctx.rect(this.position.x, this.position.y, this.scale.width, this.scale.height);
    //현재 그려진 경로만큼 잘라내기 해주는 기능이다.
    ctx.clip();
    //잘라내진 경로에 그림을 그린다.
    ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height);
  }
}