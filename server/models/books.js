'use strict';
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    bookname: DataTypes.STRING,
    description: DataTypes.STRING,
    URLimages: DataTypes.STRING
  }, {});
  books.associate = function(models) {
    // associations can be defined here
  };
  return books;
};