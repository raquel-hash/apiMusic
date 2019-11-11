'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cancion = sequelize.define('Cancion', {
    number: DataTypes.INTEGER,
    name: DataTypes.STRING,
    duration: DataTypes.DATE,
    archive: DataTypes.STRING,
    idAlbum: DataTypes.INTEGER
  }, {});
  Cancion.associate = function(models) {
    // associations can be defined here
  };
  return Cancion;
};