/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una
 * familia de algoritmos, los encapsula y los hace intercambiables.
 *
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede
 * * cambiar en tiempo de ejecución y se quiere delegar la responsabilidad de
 * * la implementación a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

/**
 * !Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios
 * ! patitos compiten en una carrera y cada uno tiene su propia
 * ! estrategia de movimiento (por ejemplo, nadar, volar o caminar).
 */

interface MovementStrategy{
  move(): void;
}

class SwingFast implements MovementStrategy{
  move(): void {
    console.log("El pato nada rápido"); 
  }
}

class FlyFast implements MovementStrategy {
  move(): void {
    console.log("El pato vuela rápido");
  }
}

class WalkFast implements MovementStrategy {
  move(): void {
    console.log("El pato camina rápido");
  }
}

//Implementador de la estrategia
class Duck {
  private name: string;
  private movementStrategy: MovementStrategy;

  constructor(name: string, movementStrategy: MovementStrategy) {
    this.name = name;
    this.movementStrategy = movementStrategy;
  }

  performMove() {
    console.log(`El pato ${this.name} se mueve`);
    this.movementStrategy.move();
  }

  setMovementStrategy(movementStrategy: MovementStrategy) {
    this.movementStrategy = movementStrategy;
  }
}

function main() {
  const duck1 = new Duck("Donald", new SwingFast());
  duck1.performMove();

  const duck2 = new Duck("Daffy", new FlyFast());
  duck2.performMove();

  duck2.setMovementStrategy(new WalkFast());
  duck2.performMove();
}

main();