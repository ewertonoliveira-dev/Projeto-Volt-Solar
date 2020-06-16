create database Voltsolar;
use Voltsolar;

create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(20),
CNPJ char(20),
telefone char(15),
email varchar(40)
);

insert into Empresa values
(null,'Empresa Revolution','23.564.243/3245-12','11-2345-1312','empresarevolution.2020@gmail.com');

insert into Empresa values
();

select * from Empresa;

select * from Empresa order by idEmpresa;

create table Usuário(
idUsuario int primary key auto_increment,
primeiroNome varchar(20),
sobrenome varchar(40),
telefoneFixo char(30),
telefoneCelular char(30),
cpf char(12),
email varchar(45),
senha varchar(30),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa)
);

insert into Usuário values
(null,'Juliana','Campos Rabelo da Silva','11-2398-3824','11-94578-2384','778566965-12','julianacampos.rabelo@gmail.com','kpopmaravilhoso',1);

insert into Usuário values
();

select * from Usuário;

select * from Usuário order by idUsuario;

create table Placa(
idPlaca int primary key auto_increment,
Modelo varchar(30),
Wats int,
Setor varchar(15),
fk_Empresa int,
foreign key (fk_Empresa) references Empresa(idEmpresa)
);

insert into Placa values
(null,'Canadian Solar - Modelo CS6P','235','1A',1);

insert into Placa values
();

select * from Placa;

select * from Placa order by idPlaca;

create table Sensor(
idSensor int primary key auto_increment,
fkPlaca int,
foreign key (fkPlaca) references Placa(idPlaca)
);

insert into Sensor values
(null,'1'),
(null,'1');

insert into Sensor values
();

select * from Sensor order by idSensor;
select * from Sensor order by fkPlaca;

create table Dados_sensor(
idDados int,
primary key (idDados),
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor),
tipo varchar(25) not null,
captação double(10,2),
dataDado datetime,
posicao int
);

insert into Dados_sensor values
(1,1,'luminosidade','29.90','2020-01-01 13:40:00',85),
(2,2,'luminosidade','400.00','2020-01-01 13:40:00',85);


insert into Dados_sensor values
();

select * from Dados_sensor;

select * from Dados_sensor order by idDados;

select Empresa.*, Usuário.* from Empresa, Usuário where fkEmpresa=idEmpresa
												order by idEmpresa;
                                                
select Placa.*, Empresa.* from Empresa, Placa where fk_Empresa=idEmpresa;
                                                
select Placa.*, Sensor.*, Dados_sensor.* from Placa, Sensor, Dados_sensor where fkPlaca=idPlaca
																		and fkSensor=idSensor
																		order by idPlaca;
                                                                        

