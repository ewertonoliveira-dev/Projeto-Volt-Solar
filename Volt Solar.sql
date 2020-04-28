create database VoltSolar;
use VoltSolar;
create table Usuário(
idUsuario int primary key auto_increment,
Nome varchar(40),
CPF char(11),
fkCNPJ int,
foreign key (fkCNPJ) references Empresa(CNPJ)
)auto_increment = 1;

insert into Usuário values
();

create table Empresa(
CNPJ int primary key,
Nome varchar(40),
Telefone char(12),
Email varchar(40)
);

insert into  Empresa values
();

create table Sensor(
idPlaca int primary key auto_increment,
Posicionamento varchar(30),
Captação varchar(40),
fkCNPJ int,
foreign key (fkCNPJ) references Empresa(CNPJ)
) auto_increment = 101;

insert into Sensor values
();

create table Sistemas(
fkSensor int,
foreign key (fkSensor) references Sensor(idPlaca),
idArduino int, 
primary key(fkSensor, idArduino),
Setor varchar (40)
);

insert into Sistemas values
();
 
