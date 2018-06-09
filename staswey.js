const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "";


client.on('ready', () => {
    console.log("Sancho ya esta en linea");
});
//Cuando piden la Bendicion
client.on('message',(message) => {
    if(message.content.includes(prefix + "Sancho dame tu bendición")){
        message.channel.send("Con gusto te la doy, donde nos vemos para dartela toda :point_right: :ok_hand: " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Sancho dame tu bendicion")){
        message.channel.send("Con gusto te la doy, donde nos vemos para dartela toda :point_right: :ok_hand: " + message.author);
    }
});
//Cuando se rien
client.on('message',(message) => {
    if(message.content.includes(prefix + "Jaj")){
        message.channel.send("Que? A caso tengo payasos en la puta cara o que vergas! " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "jaj")){
        message.channel.send("Que? A caso tengo payasos en la puta cara o que vergas! " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "JAJ")){
        message.channel.send("Que? A caso tengo payasos en la puta cara o que vergas! " + message.author);
    }
});
//Cuando Saludan
client.on('message',(message) => {
    if(message.content.includes(prefix + "Hola")){
        message.channel.send("Aqui nadie te va contestar por texto, mejor ponte tus pinches audifonos y platica :rolling_eyes: " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "hola")){
        message.channel.send("Aqui nadie te va contestar por texto, mejor ponte tus pinches audifonos y platica :rolling_eyes: " + message.author);
    }
});
//Cuando se despiden
client.on('message',(message) => {
    if(message.content.includes(prefix + "Hasta Mañana")){
        message.channel.send("No seas mamon wei. Ahora resulta que hay cosas mas importantes que el pinche juego. :angry: " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "hasta mañana")){
        message.channel.send("No seas mamon wei. Ahora resulta que hay cosas mas importantes que el pinche juego. :angry: " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Hasta mañana")){
        message.channel.send("No seas mamon wei. Ahora resulta que hay cosas mas importantes que el pinche juego. :angry: " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Hasta manana")){
        message.channel.send("No seas mamon wei. Ahora resulta que hay cosas mas importantes que el pinche juego. :angry: " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Hasta Manana")){
        message.channel.send("No seas mamon wei. Ahora resulta que hay cosas mas importantes que el pinche juego. :angry: " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "hasta manana")){
        message.channel.send("No seas mamon wei. Ahora resulta que hay cosas mas importantes que el pinche juego. :angry: " + message.author);
    }
});
//Al decir Buenas Noches
client.on('message',(message) => {
    if(message.content.includes(prefix + "Buenas Noches")){
        message.channel.send("buenas las tengas y mejor las pases " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Buenas noches")){
        message.channel.send("buenas las tengas y mejor las pases " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "buenas Noches")){
        message.channel.send("buenas las tengas y mejor las pases " + message.author);
    }
});client.on('message',(message) => {
    if(message.content.includes(prefix + "buenas noches")){
        message.channel.send("buenas las tengas y mejor las pases " + message.author);
    }
});
//XD
client.on('message',(message) => {
    if(message.content.includes(prefix + "xD")){
        message.channel.send("Mira nomas que pinche sonrrisita traes... De seguro a noche te dieron hasta para llevar. " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "XD")){
        message.channel.send("Mira nomas que pinche sonrrisita traes... De seguro a noche te dieron hasta para llevar. " + message.author);
    }
});
//Cores
client.on('message',(message) => {
    if(message.content.includes(prefix + "cores")){
        message.channel.send("No mames wey, obvio que todos quieren. Mejor pregunta quien esta disponible para ayudarte ya que solo no puedes " + message.author);
    }
});
//Asedio 
client.on('message',(message) => {
    if(message.content.includes(prefix + "asedio")){
        message.channel.send("En vez de hacer preguntas estupidas mejor organiza un pinche equipo " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Asedio")){
        message.channel.send("En vez de hacer preguntas estupidas mejor organiza un pinche equipo " + message.author);
    }
});
//que hacen?
client.on('message',(message) => {
    if(message.content.includes(prefix + "que hacen")){
        message.channel.send("Que te valga 3 hectáreas y ponte a acabar tus diarias para que ayudes con los logros del clan " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Que hacen")){
        message.cahnnel.send("Que te valga 3 hectáreas y ponte a acabar tus diarias para que ayudes con los logros del clan " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "Que Hacen")){
        message.cahnnel.send("Que te valga 3 hectáreas y ponte a acabar tus diarias para que ayudes con los logros del clan " + message.author);
    }
});
//mazmorras
client.on('message',(message) =>{
    if(message.content.includes(prefix + "mazmorras")){
        message.channel.send("@everyone Ya escucharon cabrones, puto el que no entre. " + message.author + " ya les cague el palo wei :poop: ");
    }
});
client.on('message',(message) =>{
    if(message.content.includes(prefix + "Mazmorras")){
        message.channel.send("@everyone Ya escucharon cabrones, puto el que no entre. " + message.author + " ya les cague el palo wei :poop: ");
    }
});
//Gracias
client.on('message',(message) =>{
    if(message.content.includes(prefix + "Gracias")){
        message.channel.send("Si me lo dices a mi, no tienes nada que agradecerme. Con gusto me vuelvo a revolcar contigo otra vez." + message.author);
    }
});
client.on('message',(message) =>{
    if(message.content.includes(prefix + "gracias")){
        message.channel.send("Si me lo dices a mi, no tienes nada que agradecerme. Con gusto me vuelvo a revolcar contigo otra vez. " + message.author);
    }
});
// De nada
client.on('message',(message) =>{
    if(message.content.includes(prefix + "de nada")){
        message.channel.send("En vez de decirle eso mejor cobrale. Que de seguro ya te mamaste toda tu Adena pinche pobre " + message.author);
    }
});
client.on('message',(message) =>{
    if(message.content.includes(prefix + "De nada")){
        message.channel.send("En vez de decirle eso mejor cobrale. Que de seguro ya te mamaste toda tu Adena pinche pobre. " + message.author);
    }
});
//check roles

//Bot login
client.login(process.env.BOT_TOKEN);
