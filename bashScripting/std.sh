# 0 stdin 1 stdout 2 stderr

#Take the output steram of helloWorld.sh shell script when it runs and point it to output.txt

zsh helloWorld.sh 1>output.txt

# >> this means append