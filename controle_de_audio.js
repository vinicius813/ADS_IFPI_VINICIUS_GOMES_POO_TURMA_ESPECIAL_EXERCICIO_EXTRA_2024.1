var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio() {
        this.volume = 2;
    }
    ControleDeAudio.prototype.construtor = function (volume) {
        this.volume = volume;
    };
    ControleDeAudio.prototype.aumentarvolume = function () {
        if (this.volume < 10) {
            this.volume++;
        }
    };
    ControleDeAudio.prototype.diminuirvolume = function () {
        if (this.volume > 0) {
            this.volume--;
        }
    };
    ControleDeAudio.prototype.getVolume = function () {
        return this.volume;
    };
    return ControleDeAudio;
}());
