#!/bin/zsh

#if you run this script file in a shell it will start a non interative non login shell and run the script. And it will pipe the data to your console. So you don't have access to the variable after running it.

#don't use space
myname="Aditya Vikram Singh"

myage="23"

echo "My name is $myname and I am $myage years old."

echo 'My name is $myname and I am $myage years old.'

# after running the, i can't access myname is terminal, why?

#storing a result of command in variabel 

files=$(ls)

echo $files

