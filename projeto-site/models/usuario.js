'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		// id: {
		// 	field: 'idUsuario',
		// 	type: DataTypes.INTEGER,
		// 	primaryKey: true,
		// 	identity: true
		// },		
		primeiroNome: {
			field: 'primeiroNome',
			type: DataTypes.STRING,
			allowNull: false
		},
		sobrenome: {
			field: 'sobrenome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		cpf: {
			field: 'cpf',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefoneFixo: {
			field: 'telefoneFixo',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefoneCelular: {
			field: 'telefoneCelular',
			type: DataTypes.STRING,
			allowNull: false
		},
		fotoPerfil: {
			field: 'fotoPerfil',
			type: DataTypes.STRING,
			allowNull:false
		},
		fkEmpresa: {
			field: 'fkEmpresa',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
