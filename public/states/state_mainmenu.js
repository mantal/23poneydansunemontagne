var Main = Main || {};

Main.MainMenu = function() {};

Main.MainMenu.prototype = {
    create: function() {
        game.stage.backgroundColor = '#707070';
        game.add.text(10, 10, 'Test of text !\nSupport multilines !', {font:'14px Arial', fill: '#fff'});

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        // Example : button = game.add.button(x, y, 'asset_id', callback, context (on met en général));
    },
    update: function() {
        // Change State : game.state.start('Game');
    },
};
