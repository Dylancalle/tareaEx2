describe("Sumar", () => {
    it.skip("muestra la suma de la cadena despues de apretar el boton", () => {
      cy.visit("/");
      cy.get("#cadena").type("2-2-2");
      
      cy.get("#sumar-button").click();
      cy.get("#resultado-div").should("contain", "6");
    });
  });
  

//cuando se ingresan numeros, con un - de por medio en un string, se sumaran los numeros
//si se coloca un patron al comienzo, se podra tomar en cuenta mas tipos de delimitarores
