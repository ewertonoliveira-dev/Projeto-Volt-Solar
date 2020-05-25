create database Voltsolar;
use Voltsolar;
create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(20),
CNPJ char(20),
telefone char(15),
email varchar(40)
)auto_increment=1;

insert into Empresa values
(null,'Empresa Revolution','23.564.243/3245-12','11-2345-1312','empresarevolution.2020@gmail.com'),
(null,'Raio de Sol','73.524.645/7645-13','11-1201-9876','raiodesol@gmail.com'),
(null,'Solari Tendência','93.124.293/5125-02','11-2545-1232','solari_tendencia@gmail.com');

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
)auto_increment=100;

insert into Usuário values
(null,'Juliana','Campos Rabelo da Silva','11-2398-3824','11-94578-2384','778566965-12','julianacampos.rabelo@gmail.com','kpopmaravilhoso','2'),
(null,'Anderson','Sartório da Silva','15-1345-3546','15-93264-8456','248592038-12','anderson.sartori@gmail.com','gorogui','3'),
(null,'Ewerton','Oliveira','11-9456-1245','11-98875-3422','948392019-12','ewerton.oliveira@gmail.com','drindodrin','1');

insert into Usuário values
();

select * from Usuário;

select * from Usuário order by idUsuario;

create table Placa(
idPlaca int primary key auto_increment,
Tipo varchar(30),
Wats int,
Setor varchar(15),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa)
)auto_increment=500;

insert into Placa values
(null,'Canadian Solar - Modelo CS6P','235','1A','1'),
(null,'Canadian Solar - Modelo CS6K','260','2A','2'),
(null,'Canadian Solar - Modelo CS6X','315','1B','3');

insert into Placa values
();

select * from Placa;

select * from Placa order by idPlaca;

create table Sensor(
idSensor int primary key auto_increment,
fkPlaca int,
foreign key (fkPlaca) references Placa(idPlaca)
)auto_increment=1000;

insert into Sensor values
(null,'501'),
(null,'500'),
(null,'502');

insert into Sensor values
();

select * from Sensor order by idSensor;

create table Dados_sensor(
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor),
idDados int,
primary key (fkSensor, idDados),
captação int,
dataDado date,
hora char(8),
posição char(4)
);

insert into Dados_sensor values
('1001','1','2700','2020-01-01','13:40:00','85°'),
('1000','2','2400','2020-02-16','13:30:00','82°'),
('1000','3','2600','2020-02-16','13:40:00','85°'),
('1002','4','2100','2020-03-19','15:00:00','110°'),
('1001','5','2900','2020-03-21','14:00:00','90°');

insert into Dados_sensor values
();

select * from Dados_sensor;

select * from Dados_sensor order by idDados;

select Empresa.*, Usuário.* from Empresa, Usuário where fkEmpresa=idEmpresa
												order by idEmpresa;
                                                
select Placa.*, Sensor.*, Dados_sensor.* from Placa, Sensor, Dados_sensor where fkPlaca=idPlaca
																		and fkSensor=idSensor
																		order by idPlaca;
                                                                        

