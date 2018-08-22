create database portal_noticias;

use portal_noticias;

create table noticias (
    idNoticias int not null primary key auto_increment,
    titulo varchar(100),
    noticia text,
    dataCriacao timestamp default current_timestamp
);

insert into noticias (titulo, noticia) values('Titulo da notícia', 'contaúdo da notícia');
insert into noticias (titulo, noticia) values('Outra notícia', 'contaúdo da outra notícia');
