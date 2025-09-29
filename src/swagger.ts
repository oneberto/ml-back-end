import swaggerJSDoc, { Options } from "swagger-jsdoc";

// Opções de configuração do Swagger
const options: Options = {
  swaggerDefinition: {
    info: {
      title: "API ML",
      version: "1",
    },
  },
  apis: ["./src/routes/*.ts"],
};

// Gera a especificação Swagger
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
