create database VoltSolar;
use VoltSolar;
create table Usuário(
idUsuario int primary key auto_increment,
Nome varchar(40),
CPF char(11)
)auto_increment = 1;

create table Empresa(
CNPJ int primary key,
Nome varchar(40),
Telefone char(12),
Email varchar(40),
qtdPlacas int
);

create table Placa_Solar(
idPlaca int primary key auto_increment,
Posicionamento varchar(30),
Captação varchar(40),
Energia_gerada varchar (40),
fkCNPJ int,
foreign key (fkCNPJ) references Empresa(CNPJ),
fkArduino int,
foreign key (fkArduino) references Sistemas(idArduino)
) auto_increment = 101;

create table Sistemas(
idArduino int primary key auto_increment,
Setor varchar (40)
)auto_increment= 1001;
 
