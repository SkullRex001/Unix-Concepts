# | this is called pipe
#  process 1 | process 2
# pip takes the stdout of process1 and pipes the data to the stdout of process 2


# stdout of echo is piped to node js process and stdout of node js is piped to tr

echo "This is the data from echo process" | node pipeData.js | tr 'a-z' 'A-Z'
