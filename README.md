# FullStack_PruebaTecnica
 
npm i
Para ejecutar, solo es necesario crear la base de datos llamada "pruebatecnicadb" que al inicializar el backen, el se encarga de generar las tablas, tenga presente cambiar las credenciales de acceso a la base de datos local

insertar los datos

insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('2','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 900 CC','ALMACÉN','ZANONI','AFA','652','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('3','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 900 CC','ALMACÉN','NATURA','AGD','76','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('1','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 1500 CC','ALMACÉN','ZANONI','AFA','1085','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('4','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 900 CC','ALMACÉN','ALSAMAR','BUNGE','652','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('5','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 1500 CC','ALMACÉN','CORAZóN / GERSOL','GERMAíZ','1085','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('6','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 900 CC','ALMACÉN','CAñUELAS','MOLINOS CAñUELAS','732','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('7','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 1500 CC','ALMACÉN','CAñUELAS','MOLINOS CAñUELAS','118','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('8','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 1500 CC','ALMACÉN','COCINERO','MOLINOS RíO DE LA PLATA','1202','2022-11-1  12:47:30','2022-11-12 12:47:31');
insert into `productos` (`id`, `nombre`, `rubro`, `marca`, `proveedor`, `precio`, `createdAt`, `updatedAt`) VALUES ('9','ACEITE DE GIRASOL BOTELLA DE PLASTICO - 900 CC','ALMACÉN','COCINERO','MOLINOS RíO DE LA PLATA','754','2022-11-1  12:47:30','2022-11-12 12:47:31');


INSERT INTO `pruebatecnicadb`.`rols` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES ('1', 'admin', '2022-11-13 02:46:37', '2022-11-13 02:46:38');
INSERT INTO `pruebatecnicadb`.`rols` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES ('2', 'user', '2022-11-13 02:46:37', '2022-11-13 02:46:38');

/*algunos usuarios de prueba, la contraseña U2FsdGVkX19GsKYKZ1VHmXLHAsdHuNts decodificada es: 123*/

INSERT INTO `pruebatecnicadb`.`usuarios` (`correo`, `nombres`, `apellidos`, `contrasena`, `createdAt`, `updatedAt`, `rolId`) VALUES ('admin@gmail.com', 'admin', 'page', 'U2FsdGVkX19GsKYKZ1VHmXLHAsdHuNts', '2022-11-13 02:38:58', '2022-11-13 02:38:59', '1');

INSERT INTO `pruebatecnicadb`.`usuarios` (`correo`, `nombres`, `apellidos`, `contrasena`, `createdAt`, `updatedAt`, `rolId`) VALUES ('user@gmail.com', 'admin', 'page', 'U2FsdGVkX19GsKYKZ1VHmXLHAsdHuNts', '2022-11-13 02:38:58', '2022-11-13 02:38:59', '2');
