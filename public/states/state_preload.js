var Main = Main || {};

Main.Preload = function() {};

Main.Preload.prototype = {
    preload: function() {
        // Example Line : game.load.image('key', 'path');
        game.load.image('logo', 'phaser.png');
    },
    create: function() {
        game.state.start('MainMenu');
    }
};
