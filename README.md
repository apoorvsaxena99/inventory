In postman :

POST Method

localhost:3000/operation

body : raw -->application/json

Example 1: [{"productId":143,"quantity":250,"operation":"add"}]
Example 2: [{"productId":193,"quantity":250,"operation":"add"}]
Example 3: [{"productId":123,"quantity":250,"operation":"subtract"},{"productId":193,"quantity":250,"operation":"add"}]
Example 4: [{"productId":1,"quantity":250,"operation":"add"}]
Example 5: {"productId":143,"quantity":250,"operation":"add"}
