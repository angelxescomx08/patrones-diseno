/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls{
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
    }
    return DragonBalls.instance;
  }

  collectBall(){
    if(this.ballsCollected < 7){
      this.ballsCollected++;
      console.log(`Esfera recolectada. Total de esferas recolectadas: ${this.ballsCollected}`);
      return;
    }
    console.log("Ya has recolectado todas las esferas");
  }

  summonShenlong(){
    if(this.ballsCollected === 7){
      console.log("Shenlong se ha invocado, pide tu deseo");
      this.ballsCollected = 0;
      return;
    }

    console.log("No puedes invocar Shenlong, no has recolectado todas las esferas");
  }


}

function main(){
  const dragonBalls = DragonBalls.getInstance();
  dragonBalls.collectBall();
  dragonBalls.collectBall();
  dragonBalls.collectBall();
  dragonBalls.collectBall();
  dragonBalls.summonShenlong();
}
main();