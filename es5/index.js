const IDBConsole = console;
function getIDBConsole(msg){
  IDBConsole.log(msg);
}
//IDB의 생성자
class IDB{
  constructor(viewerId){
    this.camera;
    this.render = new Renderer(viewerId);
    this.scene = new Scene();
    this.reqAnimationId;
  }
  
  //API
  run(){
    const _this = this;
    (function runing(){
      _this.reqAnimationId = requestAnimationFrame(runing);
      _this.render.rendering(_this.scene);
    })()
  }

  stop(){
    cancelAnimationFrame(this.reqAnimationId);
  }

}

class Renderer{
  constructor( viewerId ){
    this.canvas = document.createElement("canvas");
    this.viewer = document.getElementById(viewerId);
    viewer.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    getIDBConsole("canvas생성");
  }

  //씬 객체를 받아서 그 안에 있는 객체들을 그려준다.
  rendering(scene){
    //canvas 초기화
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
class Scene{
  
}
class Object {
  constructor(id){
    this.id = id;
    this.fillStyle = "red";
    this.x = 50;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.image = null;
  }
}
class Shape extends Object{
  constructor(){
    getIDBConsole(this);
  }

}