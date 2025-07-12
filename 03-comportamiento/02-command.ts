/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Command{
  execute(): void;
}

class Light{
  turnOn(){
    console.log("%cLa luz esta encendida", COLORS.yellow);
  }
  turnOff(){
    console.log("%cLa luz esta apagada", COLORS.yellow);
  }
}

class Fan{
  turnOn(){
    console.log("%cEl ventilador esta encendido", COLORS.green);
  }
  turnOff(){
    console.log("%cEl ventilador esta apagado", COLORS.green);
  }
}

//comandos
class LightOnCommand implements Command{
  constructor(private light: Light){}
  execute(): void {
    this.light.turnOn()
  }
}

class LightOffCommand implements Command{
  constructor(private light: Light){}
  execute(): void {
    this.light.turnOff()
  }
}

class FanOnCommand implements Command{
  constructor(private fan: Fan){}
  execute(): void {
    this.fan.turnOn()
  }
}

class FanOffCommand implements Command{
  constructor(private fan: Fan){}
  execute(): void {
    this.fan.turnOff()
  }
}

class RemoteControl{
  private commands: Record<string,Command> = {};

  setCommand(button:string, command: Command){
    this.commands[button] = command;
  }

  pressButton(button:string){
    if(this.commands[button]){
      this.commands[button].execute();
      return;
    }
    console.log("%cNo hay ningún comando asignado", COLORS.red);
  }
}

function main(){
  const remoteControl = new RemoteControl();
  const light = new Light();
  const fan = new Fan();

  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);

  const fanOnCommand = new FanOnCommand(fan);
  const fanOffCommand = new FanOffCommand(fan);

  remoteControl.setCommand("1",lightOnCommand);
  remoteControl.setCommand("2",lightOffCommand);
  remoteControl.setCommand("3",fanOnCommand);
  remoteControl.setCommand("4",fanOffCommand);

  do{
    console.clear();
    const button = prompt(`Presiona el botón del control:
      1. Encender la luz
      2. Apagar la luz
      3. Encender el ventilador
      4. Apagar el ventilador

      Botón: 
      `) ?? ""

    remoteControl.pressButton(button);
    prompt("")
  }while(true);

}

main()