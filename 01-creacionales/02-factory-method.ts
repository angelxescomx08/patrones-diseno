/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparing %cChicken Hamburger", COLORS.brown);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparing %cBeef Hamburger",COLORS.brown);
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

function main() {
  let restaurant: Restaurant;
  const burguerType = prompt("¿Qué tipo de hamburguesas desea? (chicken/beef)");

  switch (burguerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    default:
      throw new Error("Invalid burguer type");
  }

  restaurant.orderHamburger();
}

main();