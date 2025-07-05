/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Projector{
  turnOn(){
    console.log('Projector on');
  }

  turnOff(){
    console.log('Projector off');
  }
}

class SoundSystem{
  turnOn(){
    console.log('SoundSystem on');
  }

  turnOff(){
    console.log('SoundSystem off');
  }
}

class VideoPlayer{
  turnOn(){
    console.log('VideoPlayer on');
  }

  turnOff(){
    console.log('VideoPlayer off');
  }

  play(movie: string){
    console.log(`Playing ${movie}`);
  }

  stop(){
    console.log('Stopping video');
  }
}

class PopcornMaker{
  poppingPopcorn(){
    console.log('Popping popcorn');
  }

  stopPopping(){
    console.log('Stopping popcorn');
  }
}

interface HomeTheaterFacadeOptions{
  popcornMaker: PopcornMaker;
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
}

class HomeTheaterFacade{

  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcornMaker: PopcornMaker;

  constructor({ 
    popcornMaker, projector, soundSystem, videoPlayer 
  }:HomeTheaterFacadeOptions){
    this.projector = projector;
    this.popcornMaker = popcornMaker;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
  }

  watchMovie(movie: string){
    console.log("Preparando película");
    this.popcornMaker.poppingPopcorn();
    this.soundSystem.turnOn();
    this.projector.turnOn();
    this.videoPlayer.turnOn();
    this.videoPlayer.play(movie);
  }

  endWatchingMovie(){
    console.log("Deteniendo película");
    this.popcornMaker.stopPopping();
    this.soundSystem.turnOff();
    this.projector.turnOff();
    this.videoPlayer.turnOff();
    this.videoPlayer.turnOff();
  }

}

function main(){
  const popcornMaker = new PopcornMaker();
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  const videoPlayer = new VideoPlayer();

  const homeTheaterFacade = new HomeTheaterFacade({ popcornMaker, projector, soundSystem, videoPlayer });

  homeTheaterFacade.watchMovie('The Matrix');
  homeTheaterFacade.endWatchingMovie();
}

main()