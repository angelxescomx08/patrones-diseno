/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
  showDetails(indent?:string): void;
}

class File implements FileSystemComponent{
  private name: string;

  constructor(name:string){
    this.name = name;
  }

  showDetails(indent: string = ""): void {
    console.log(`${indent}- Archivo: ${this.name}`);
  }
  
}

class Folder implements FileSystemComponent{
  private name: string;
  private components: FileSystemComponent[] = [];

  constructor(name:string){
    this.name = name;
  }

  add(component: FileSystemComponent){
    this.components.push(component);
  }

  showDetails(indent: string = ""): void {
    console.log(`${indent}- Carpeta: ${this.name}`);
    this.components.forEach(component=>{
      component.showDetails(`${indent} `);
    })
  }
}

function main(){
  const file1 = new File("Archivo1.txt");
  const file2 = new File("Archivo2.txt");
  const file3 = new File("Archivo3.txt");
  const file4 = new File("Archivo4.txt");

  const folder1 = new Folder("Carpeta1");
  folder1.add(file1);
  folder1.add(file2);

  const folder2 = new Folder("Carpeta2");
  folder2.add(file3);
  folder2.add(file4);

  const folder3 = new Folder("Carpeta3");
  folder3.add(folder1);
  folder3.add(folder2);

  folder3.showDetails();
}

main()