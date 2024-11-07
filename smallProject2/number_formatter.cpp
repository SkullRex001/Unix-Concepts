#include <iostream>
#include <fstream>
#include <string>

int main(int argc , char*argv[]){

    
        // created objct of ofstream class
        std::ofstream fout;

        //node will pass the argv array as it start c process as it's child process
        fout.open(argv[1]);

        //read the first number from the input stream, the input stream is filled by node process
        int c =  fgetc(stdin);

        //read all the numbers until the input stream is empty

        // EOF --> writeSteam.end();
        //readstream.pipe(writeStream) does it automatically
        while (c != EOF)
        {
          fout << static_cast<char>(c); 
           c = fgetc(stdin);
        }
        


    return 0;
}