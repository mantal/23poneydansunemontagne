var Main = Main || {};

Main.MainMenu = function() {};

Main.MainMenu.prototype = {
    create: function() {
        this.game.stage.backgroundColor = '#707070';
        this.game.add.text(10, 10, 'Test of text !\nSupport multilines !', {font:'14px Arial', fill: '#fff'});

        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        // Example : button = this.game.add.button(x, y, 'asset_id', callback, context (on met en général));
    },
    update: function() {
        // Change State : this.game.state.start('Game');
    },
};
