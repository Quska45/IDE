class Renderer{
  constructor( viewerId ){
    this.canvas = document.createElement("canvas");
    this.viewer = document.getElementById(viewerId);
    viewer.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    getIDEConsole("canvas생성");
  }

  //씬 객체를 받아서 그 안에 있는 객체들을 그려준다.
  rendering(scene, ctx){
    //canvas 초기화
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    scene.children.reduce(function(acc, cur, i){
      scene.children.draw(ctx);
    }, scene)
  }
}