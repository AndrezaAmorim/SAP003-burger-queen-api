'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Café Americano',
        price: 5,
        category:'breakfast',
        type:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Café com Leite',
        price: 7,
        category:'breakfast',
        type:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Suco de Laranja',
        price: 7,
        category:'breakfast',
        type:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Misto Quente',
        price: 10,
        category:'breakfast',
        type:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Agua 700ml',
        price: 7,
        category:'lunch',
        type:'beverages',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Agua 500ml',
        price: 5,
        category:'lunch',
        type:'beverages',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Refrigerante 500ml',
        price: 7,
        category:'lunch',
        type:'beverages',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Refrigerante 700ml',
        price: 10,
        category:'lunch',
        type:'beverages',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Hamburguer Duplo',
        price: 15,
        category:'lunch',
        type:'burger',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Hamburguer Simples',
        price: 10,
        category:'lunch',
        type:'burger',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Batata Frita',
        price: 5,
        category:'lunch',
        type:'siders',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Aneis de Cebola',
        price: 5,
        category:'lunch',
        type:'siders',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('products', null, {});
    
  }
};
