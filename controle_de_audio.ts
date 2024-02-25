class ControleDeAudio {
    volume : number = 2;

    construtor(volume : number) {
        this.volume = volume;
    }

    aumentarvolume() : void {
        if (this.volume < 10) {
            this.volume++;
        }
    }

    diminuirvolume() : void {
        if (this.volume > 0) {
            this.volume--;
        }
    }

    getVolume() : number {
        return this.volume;
    }
}
    