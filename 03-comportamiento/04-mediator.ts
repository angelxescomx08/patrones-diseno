/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */

import { COLORS } from "../helpers/colors.ts";

class ChatRoom{
  private users: User[] = [];
  public title: string;

  constructor(title: string){
    this.title = title;
  }

  addUser(user: User){
    this.users.push(user);
  }

  sendMessage(sender: User, message: string){
    const usersToSend = this.users.filter(user=> user!== sender)
    for(const user of usersToSend){
      user.receiveMessage(sender, message);
    }
  }
}

class User{
  private userName: string;
  private chatRoom: ChatRoom;

  constructor(username: string, chatRoom: ChatRoom){
    this.userName = username;
    this.chatRoom = chatRoom;
    this.chatRoom.addUser(this);
  }

  sendMessage(message: string){
    console.log(`\n${this.userName}: %c${message}`, COLORS.white);
    this.chatRoom.sendMessage(this,message);
  }

  receiveMessage(sender: User, message: string){
    console.log(`\n${sender.userName} envió: %c${message}`, COLORS.white);
  }
}

function main(){
  const chatRoom = new ChatRoom("Grupo de trabajo");

  const user1 = new User("Angel", chatRoom); 
  const user2 = new User("Esmeralda", chatRoom); 
  const user3 = new User("Kary", chatRoom);
  
  
  user1.sendMessage("Hola");
  user2.sendMessage("Hola");
  user3.sendMessage("Que tal?");
}

main()

