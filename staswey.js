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
    if(message.content.includes(prefix + "Ja")){
        message.channel.send("Que? A caso tengo payasos en la puta cara o que vergas! " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "ja")){
        message.channel.send("Que? A caso tengo payasos en la puta cara o que vergas! " + message.author);
    }
});
client.on('message',(message) => {
    if(message.content.includes(prefix + "JA")){
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
//check roles

//Bot login
client.login(process.env.BOT_TOKEN);
