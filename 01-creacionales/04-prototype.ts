/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document{
  public title: string;
  public author: string;
  private content: string;

  constructor(title: string, author: string, content: string){
    this.title = title;
    this.author = author;
    this.content = content;
  }

  public displayInformation(){
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Content: ${this.content}`);
  }

  public clone(): Document{
    return new Document(this.title, this.author, this.content);
  }
}

function main(){
  const document1 = new Document(
    "Document 1", "John Doe", "This is the content of the document"
  );
  const document2 = document1.clone();

  document1.displayInformation();
  document2.displayInformation();
}

main();