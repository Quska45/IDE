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
