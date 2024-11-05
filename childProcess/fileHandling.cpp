#include <iostream>
#include <fstream>
#include <string>
int main()
{

    // std::string a = "Aditya";
    // ofstream is a class given by c++ to write to a file
    std::ofstream fout;

    // //If file is not present, it will create it
    fout.open("output.txt");

    fout << "Hello My Name is aditya\n";

    fout.close(); // release resources











    // ifstream is a class given by c++ to write to a file

    std::ifstream fin;

    fin.open("output.txt");

    char c;
    // This will ignore space
    // To read space use fin.get() instead of fin>>c
    fin >> c;

    while (!fin.eof())
    {
        std::cout << c;

        fin >> c;
    }

    fin.close();












    // Read and print Multiple Line;

    std::ifstream fin;

    fin.open("output.txt");

    std::string s;

    while (getline(fin, s))
    {
        std::cout << s << '\n';
    }
    fin.close();
}