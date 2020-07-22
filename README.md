# Container-Docker--Mysql-Nodejs
Docker container application using Mysql and Nodejs technologies





<p align="center">
  <img width="600" height="150" src="https://user-images.githubusercontent.com/67255566/85253956-96884200-b435-11ea-9ae3-8685213b9f1e.jpg">
</p>



### Criando a aplicação

Após ter feito o download dos arquivos, abra seu editor de códigos a partir da pasta raiz, se a pasta não for criada automaticamente crie uma. 

Para rodar uma aplicação com docker, precisamos primeiro criar uma imagem, que nos servirá de base para geração do nosso conteiner. As imagens do docker são construidas apartir de um Dockerfile, ele especifica tudo que nossa imagem terá, criamos um diretório de trabalho, instalamos as dependências via npm e expomos a porta.

Com o Dockerfile pronto, precisamos fazer o build da imagem, para isso execute:

```
docker build -t mysql-image -f api/database/Dockerfile .
```

Com o build finalizado, temos a nossa disposição uma imagem com o nome ‘mysql-image’, para comprovar execute o comando abaixo e você terá como retorno as informações da imagem:

```
docker image ls
```

Com tudo pronto, é hora de rodarmos nosso conteiner e executarmos nossa aplicação, para isso execute o comando abaixo:

```
docker run -d --rm --name mysql-container  mysql-image
```

O comando acima executa um conteiner apartir da nossa imagem , temos nossa aplicação executando, para comprovar execute:

```
docker ps
```

Depois execute os comandos a seguir:

```
docker exec -i mysql-container mysql -uroot -pseupassword<api/database/script.sq
```


```
docker exec -it mysql-container /bin/bash
```


```
mysql -uroot -pseupassword
```

```
use seupassword
```

```
select * from products;
```

E você verá os produtos do seu container existente.

### Para segunda parte, certifique-se de ter estaldo o nodemon, express e o driver mysql
 
Agora, no arquivo index.js você precisará informar o host da rede, por padrão o docker cria seus containers numa mesma rede, porém pode ser ciadas diferentes redes. para nossa aplicação funcionar pracisamos apens saber qual o ip que a o mysql está utilizando execute o camando abaixo no terminal:

```
docker inspect mysql-container
```
você verá uma lista, procure por "IPAdderess" e você verá um ip ao lado, será exibido algo neste formato "IPAdderess": "178.85.0.3",
sendo a numeração exibida o ip que o mysql esta usando. copie o endereço IP e cole na host do index.js

vá para pasta raiz do projeto e execute o seguinte comando:

```
docker build -t node-image -f api/database/Dockerfile .
```
 será baixada aimagem docker, se optar por ver execute o comando "docker ls", execute o camando abixo:
 
```
docker run -d -v (pwd)/api:home/node/app -p 9001:9001 --rm --name node-container node-image
```

Aora vamos aceessar o container pelo navegador! abra navegador e digite:


### https://localhost:9001/products

e você deverá ver os produtos criados anteriormente.
