A small tool that shows a few of my favourite bread recipes.

No frameworks, just simple vanilla JS for this very lightweight script.

The grid can be seen here [here](https://alyonavyshnevska.github.io/assets/projects/homemade_bread/). 

The recipe links are in the exported mongoDB collections: `bread.json` and `bread.csv`. 

Import the files into local mongoDB from system command line: 

`mongoimport --db homemade_bread --collection bread --file bread.json`

`mongoimport --db homemade_bread --collection bread --type csv --fields _id, name, link --file bread.csv`

![img](img/grid.png)
