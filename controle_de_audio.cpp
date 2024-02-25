#include <iostream>

class ControleDeAudio {
private:
    int volume;

public:
 // Constructor que inicializa o volume com 2
 ControleDeAudio(): volume(2) {}

 // M�todo para aumentar o volume
 void aumentarVolume() {
 if (volume < 10) {
    volume++;
 }
 }

 // M�todo para diminuir o volume
 void diminuirVolume() {
 if (volume > 0) {
    volume--;
 }
 }

 // M�todo para obter o valor do volume
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
std :: cout << "Volume aumentado ap�s se aumentar" << controle.getVolume() << std :: endl;

// Diminuindo o volume
controle.diminuirVolume();
std :: cout << "Volume diminu�do ap�s se diminuir" << controle.getVolume() << std :: endl;

// Tentando diminuir o volume al�m do m�nimo
for (int i = 0; i < 5; i++) {
    controle.diminuirVolume();

}
std :: cout << "Volume ap�s v�rias tentativas de diminu�-lo" << controle.getVolume() << std :: endl;

// Tentando aumentar o volume al�m do m�ximo
for (int i = 0; i < 10; i--) {
    controle.aumentarVolume();
}

std :: cout << "Volume ap�s v�rias tentativas de aument�-lo" << controle.getVolume() << std :: endl;

return 0;

}
