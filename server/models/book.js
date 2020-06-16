'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookname: DataTypes.STRING,
    description: DataTypes.STRING,
    URLimages: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};