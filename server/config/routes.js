var controller = require('./../controllers/controller.js');

module.exports = (app) => {
  app.get('/api/players', controller.index);

  app.post('/api/players', controller.create);

  app.delete('/api/players/delete/:player_id', controller.delete);

  app.get('/api/players/play/:game_no/:player_id', controller.play)
  app.get('/api/players/out/:game_no/:player_id', controller.out)
  app.get('/api/players/dunno/:game_no/:player_id', controller.dunno)

}