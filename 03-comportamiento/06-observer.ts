/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

interface Observer{
  notify(videoTitle: string): void;
}

class YouTubeChannel{
  private subscribers: Observer[] = [];
  private name: string;

  constructor(name: string){
    this.name = name;
  }

  subscribe(observer: Observer){
    this.subscribers.push(observer);
    console.log(`Nuevo suscriptor al canal ${this.name}`);
  }

  unsubscribe(observer: Observer){
    this.subscribers = this.subscribers.filter(subscriber => subscriber!==observer);
    console.log(`Un suscriptor se ha dado de baja ${this.name}`);
  }

  uploadVideo(videoTitle: string){
    console.log(`El canal ${this.name} ha subido un video`);
    for(const subscriber of this.subscribers){
      subscriber.notify(videoTitle);
    }
  }
}

class Subscriber implements Observer{
  private name: string;
  constructor(name: string){
    this.name = name;
  }
  notify(videoTitle: string): void {
    console.log(`El suscriptor ${this.name} con el video ${videoTitle}`);
  }
}

function main(){
  const channel = new YouTubeChannel("AngelSoftwareDev");
  const subscriber1 = new Subscriber("carlos");
  const subscriber2 = new Subscriber("esmeralda");
  const subscriber3 = new Subscriber("ana");

  channel.subscribe(subscriber1);
  channel.subscribe(subscriber2);
  channel.subscribe(subscriber3);

  channel.uploadVideo("Programando observer");
}

main()