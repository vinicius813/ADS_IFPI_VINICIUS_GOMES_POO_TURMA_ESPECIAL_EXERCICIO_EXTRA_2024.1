#include <iostream>

class ControleDeAudio {
private:
    int volume;

public:
 // Constructor que inicializa o volume com 2
 ControleDeAudio(): volume(2) {}

 // Método para aumentar o volume
 void aumentarVolume() {
 if (volume < 10) {
    volume++;
 }
 }

 // Método para diminuir o volume
 void diminuirVolume() {
 if (volume > 0) {
    volume--;
 }
 }

 // Método para obter o valor do volume
 int getVolume() const {
 return volume;
 }

};

int main() {

// Exemplo de uso na classe ControleDeAudio
ControleDeAudio controle;

std :: cout << "Volume inicial" << controle.getVolume() << std :: endl;

// Aumentando o volume
controle.aumentarVolume();
std :: cout << "Volume aumentado após se aumentar" << controle.getVolume() << std :: endl;

// Diminuindo o volume
controle.diminuirVolume();
std :: cout << "Volume diminuído após se diminuir" << controle.getVolume() << std :: endl;

// Tentando diminuir o volume além do mínimo
for (int i = 0; i < 5; i++) {
    controle.diminuirVolume();

}
std :: cout << "Volume após várias tentativas de diminuí-lo" << controle.getVolume() << std :: endl;

// Tentando aumentar o volume além do máximo
for (int i = 0; i < 10; i--) {
    controle.aumentarVolume();
}

std :: cout << "Volume após várias tentativas de aumentá-lo" << controle.getVolume() << std :: endl;

return 0;

}
