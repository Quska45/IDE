//콘솔은 윈도우 프로퍼티에 포함되어 있다는 것을 생각조차 해본적이 없다.
//자바의 syso 처럼 객체를 생성해서 쓰는 거라고 생각했는데 그것은 전혀 아니었다.
//나는 콘솔 따로 빼지말고 그냥 써야겠다. 나중에 솔루션 할수도?
const IDBConsole = console;
function getDefaultIDBConsole(msg){
  IDBConsole.log.apply(IDBConsole, arguments);
}

function getWarnIDBConsole(){
  
}
