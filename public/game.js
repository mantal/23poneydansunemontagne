var Main = Main || {};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

Main.game = game;

Main.game.state.add('Preload', Main.Preload);
Main.game.state.add('MainMenu', Main.MainMenu);
Main.game.state.add('Game', Main.Game);

Main.game.state.start('Preload');
