/**
 * !Patrón Visitor
 *
 * El patrón Visitor es un patrón de diseño de comportamiento
 * que te permite separar algoritmos de los objetos sobre
 * los que operan.
 *
 * * Es útil cuando necesitas añadir nuevas operaciones a
 * * clases estables sin cambiar su código.
 *
 * https://refactoring.guru/es/design-patterns/visitor
 */

/**
 * Contexto: Imagina que estás diseñando un sistema para un parque
 * temático con diferentes tipos de atracciones:
 * montañas rusas, casas del terror y ruedas de la fortuna.
 *
 * Cada atracción tiene su propio precio de entrada y ofrece un descuento
 * dependiendo del tipo de visitante (niño, adulto o adulto mayor).
 *
 * Aquí es donde entra el patrón Visitor, que permite aplicar operaciones
 * específicas (como calcular el precio con descuento) dependiendo tanto
 * de la atracción como del tipo de visitante,
 * sin modificar las clases originales.
 */

interface Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void;
  visitHauntedHouse(hauntedHouse: HauntedHouse): void;
  visitFerrisWheel(ferrisWheel: FerrisWheel): void;
}

interface Attraction {
  accept(visitor: Visitor): void;
}

class RollerCoaster implements Attraction {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  accept(visitor: Visitor): void {
    visitor.visitRollerCoaster(this);
  }

  getPrice(): number {
    return this.price;
  }
}

class HauntedHouse implements Attraction {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  accept(visitor: Visitor): void {
    visitor.visitHauntedHouse(this);
  }

  getPrice(): number {
    return this.price;
  }
}

class FerrisWheel implements Attraction {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  accept(visitor: Visitor): void {
    visitor.visitFerrisWheel(this);
  }

  getPrice(): number {
    return this.price;
  }
}

class ChildVisitor implements Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log("El precio de la montaña rusa para un niño es de", rollerCoaster.getPrice() * 0.5);
  }

  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log("El precio de la casa del terror para un niño es de", hauntedHouse.getPrice() * 0.5);
  }

  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log("El precio de la rueda de la fortuna para un niño es de", ferrisWheel.getPrice() * 0.5);
  }
}

class AdultVisitor implements Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log("El precio de la montaña rusa para un adulto es de", rollerCoaster.getPrice());
  }

  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log("El precio de la casa del terror para un adulto es de", hauntedHouse.getPrice());
  }

  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log("El precio de la rueda de la fortuna para un adulto es de", ferrisWheel.getPrice());
  }
}

function main() {
  const rollerCoaster = new RollerCoaster(10);
  const hauntedHouse = new HauntedHouse(15);
  const ferrisWheel = new FerrisWheel(20);

  const childVisitor = new ChildVisitor();
  const adultVisitor = new AdultVisitor();

  rollerCoaster.accept(childVisitor);
  hauntedHouse.accept(childVisitor);
  ferrisWheel.accept(childVisitor);
  
  
}

main();