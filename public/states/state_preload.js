var Main = Main || {};

Main.Preload = function() {};

Main.Preload.prototype = {
    preload: function() {
        // Example Line : this.load.image('key', 'path');
        this.game.load.image('logo', 'phaser.png');
    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};
