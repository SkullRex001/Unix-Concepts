#include <iostream>

int main(int argc, char* argv[]) {

    

    char c = fgetc(stdin);

    while (c != EOF)
    {
         fprintf(stdout , "%c" , c );
         c = fgetc(stdin);
    }
    //When we press ctrl + D it sends EOF through output steam to the input stream of program
    

   return 0;
}
