'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [{
      firstName: 'Praveen',
      lastName: 'Kondreddy',
      email: 'Praveennov26@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
       }])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
