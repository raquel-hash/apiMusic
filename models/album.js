'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    titulo: DataTypes.STRING,
    description: DataTypes.STRING,
    gestion: DataTypes.DATE,
    image: DataTypes.STRING,
    idArtista: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};