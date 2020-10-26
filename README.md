# flyDevs
Steps to start the app

type the following command in a linux shell to clone repository inside an specific directory
$git clone https://github.com/juanmadm88/flyDevs.git

then checkout develop branch
$git checkout develop

install all dependencies from package.json
$ npm i

then run the following command to start server locally
$ gulp start-dev

testing server with apollo playground on browser https://localhost:8000/flydevs

get user by id, selecting age, name and lastName attributes

query{
  userById(_id:"5f94a37f882881214aaa8c94"){age,name,lastName}
}
  
get user by name equals sergio with all atributes

query{
  userMany(filter:{name:"sergio"}){_id,name,lastName,age}
}

update user by id 5f94a37f882881214aaa8c94, retrieving user's id

mutation {
  userUpdateById(_id: "5f94a37f882881214aaa8c94", record:{name:"sarlanga",lastName:"sarasa"}){recordId}
}

  
delete user by id, retrieving user id

mutation {
  userRemoveById(_id:"5f947f965705b37c91abc37a"){recordId}
}

create one user

mutation{
  userCreateOne(record:{lastName:"lopez",name:"hernan",age:23}){recordId}
}
