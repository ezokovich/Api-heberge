# How to Use Our REST APIs

## Table of Contents
- [Introduction](#introduction)
- [Endpoints](#endpoints)
  - [Request methods](#request-methods)
  - [Examples](#examples)
- [Real-time example](#real-time_example)



## Introduction
 
This document is a documentation of the API.<br> 
The following will be dedicated to how to use the Api and test it with different<br> 
methods and then list some status codes.

### Endpoints 
<hr>


Endpoints with literal and readable URLs is what makes an API great. To make it easy and convenient for you, we've specified how you should do it.



|Endpoint                                 |      About                  |
|---------------------------------------- | --------------------------  |
| `api/auth/register`                     | create a user               |
| `api/auth/login`                        | to login                    |
| `api/users/:id`                         | to update user              |
| `api/users/:id`                         | delete user                 |
| `api/users/find/:id`                    | get a specific user         |
| `api/users/`                            |get all  users               |
| `api/users/stats`                       |get user stats               |
| `api/movies`                            | create a movie              |
| `api/movies/random`                     | get a specific movie        |
| `api/movies/random?type=series`         | get only random series      |
| `api/movies/random?type=movie`          | get only  random movie      |
| `api/movies/`                           |get all  movies              |
| `api/movies/:id`                        |delete movie                 |
| `api/lists`                             | create a new list           |
| `api/lists/`                            |get all  lists               |
| `api/lists/:id`                         |delete  lists                |
| `api/lists?type=series`                 | get only  series            |
| `api/lists?type=movie`                  | get only  movie             |
| `api/lists?type=movie&genre=comedy`     | get only movie which genre is comedy |

### request-methods
<hr>


The request method is how we distinguish the type of action we are "asking" our endpoint to perform. For example, the GET method stands on its own. But we also have a few other methods that we use quite often. such as Post put ... .
| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Used to retrieve information (like users,lists,movies) |
| `POST`   | Used when inserting in the database a new data,_(for example register,or new movies ...)_ |
| `PUT`    |Used to replace an entire element (all fields) with new data._For example update Users_|
| `DELETE` | Used to delete an item. _like delete users ,movies and lists_             |


### Examples
<hr>

Now that we’ve learned about  the different request methods that we should use, it’s time for some examples:

**Get Method **


 | URL                          | Description                              |
 |:----------------------------:| :-----------------------:|
 | `api/users/find/:id`                    | get a specific user         |
 | `api/users/`                            |get all  users               |
 | `api/users/stats`                       |get user stats               |
 | `api/movies/random?type=series`         | get only random series      |
 | `api/movies/random?type=movie`          | get only  random movie      |
 | `api/movies/`                           |get all  movies              |
 | `api/lists/`                            |get all  lists               |
 | `api/lists?type=series`                 | get only  series            |
 | `api/lists?type=movie`                  | get only  movie             |
 | `api/lists?type=movie&genre=comedy`     | get only movie which genre is comedy |
 
 <br>
 
**Post Method **


| URL                          | Description                            |
|:----------------------------:| :-----------------------:|
| `api/auth/register`                     | create a user               |
| `api/auth/login`                        | to login                    |
| `api/movies`                            | create a movie              |
| `api/lists`                             | create a new list           |

 <br>
 
**Delete Method **

 | URL                          | Description                         |
 |:----------------------------:| :-----------------------:|
| `api/users/:id`                         | delete user                 |
| `api/movies/:id`                        |delete movie                 |
| `api/lists/:id`                         |delete  lists                |

**Put Method **


 | URL                          | Description                         |
 |:----------------------------:| :-----------------------:|
 | `api/users/:id`              | to update user              |



## real-time_example
<br>
<br>
***
*`GET` method : <br>
***
<br>
<br>
$${\color{lightblue} **Get &ensp; a &ensp; Specific &ensp; User** }$$


```
http://localhost:8080/api/users/find/:id
```


$${\color{lightblue} **Get &ensp; All &ensp; Users** }$$


```
http://localhost:8080/api/users/
```


$${\color{lightblue} **Get &ensp; User &ensp; Stats** }$$


```
http://localhost:8080/api/users/stats
```




$${\color{lightblue} **Get &ensp; Only &ensp; Random &ensp; Series** }$$


```
http://localhost:8080/api/movies/random?type=series
```




$${\color{lightblue} **Get &ensp; Only &ensp; Random &ensp; Movie** }$$


```
http://localhost:8080/api/movies/random?type=movie
```




$${\color{lightblue} **Get &ensp; All  &ensp; Movies** }$$


```
http://localhost:8080/api/movies/
```





$${\color{lightblue} **Get &ensp; All &ensp;  Lists** }$$


```
http://localhost:8080/api/lists/
```





$${\color{lightblue} **Get &ensp; Only &ensp; Series** }$$ 


```
http://localhost:8080/api/lists?type=series
```


$${\color{lightblue} **Get &ensp; Only &ensp;  Movie** }$$ 


```
http://localhost:8080/api/lists?type=movie
```



$${\color{lightblue} **Get &ensp; Only &ensp; Movie &ensp; Which &ensp; Genre &ensp; Is &ensp; Comedy** }$$ 


```
http://localhost:8080/api/lists?type=movie&genre=comedy
```


<br>
<br>


***
*`POST` method : <br>
***

<br>


$${\color{lightblue} **Create &ensp; a &ensp; User** }$$


```
http://localhost:8080/api/auth/register
```


<p align="center"  >
<img width="500" height="450" alt="reg" src="https://user-images.githubusercontent.com/100726144/189366271-6b2c664f-a4d5-4d7d-a6e8-a6d9e7e177e0.png">
</p>

$${\color{lightblue} **To &ensp; Login** }$$


```
http://localhost:8080/api/auth/login
```
<p align="center"  >
<img width="500" height="450" alt="none" src="https://user-images.githubusercontent.com/100726144/189889670-4e1b4c24-c6b6-4e0a-82af-4a08b3cc6801.png">
</p>
	


$${\color{lightblue} **To &ensp; Create  &ensp; a  &ensp; movie** }$$


```
http://localhost:8080/api/movies
```
<p align="center"  >
<img width="500" height="500" alt="Capture d’écran 2022-09-13 à 13 18 47" src="https://user-images.githubusercontent.com/100726144/189912811-12390ac8-f18e-4913-ae84-daa22442686a.png">

</p>


$${\color{lightblue} **To &ensp; create  &ensp; a  &ensp; new &ensp; List** }$$


```

http://localhost:8080/api/lists
```
<p align="center"  >

</p>
