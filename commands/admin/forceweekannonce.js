const {PermissionFlagsBits} = require('discord.js');

const semainesDeMerde = [
  "Bonne semaine à vous, remplie de réunions inutiles et de cafés froids.",
  "Je vous souhaite une semaine pleine de retards, de bugs et de migraines.",
  "Bonne semaine à vous, qu’elle soit aussi agréable qu’un lundi matin sous la pluie.",
  "Que cette semaine vous apporte tout le stress que vous méritez.",
  "Je vous souhaite une connexion Wi-Fi instable et des appels en visio qui figent toujours quand c’est important.",
  "Bonne semaine à vous, que vos collègues soient encore plus insupportables que d’habitude.",
  "Je vous souhaite une semaine à base de tickets urgents à rendre hier.",
  "Bonne semaine, avec des nuits trop courtes et des réveils bien trop violents.",
  "Que cette semaine vous écrase comme un lundi de novembre sans chauffage.",
  "Bonne semaine à vous, qu’elle soit rythmée par des pannes, des râleurs et des imprévus.",
  "Je vous souhaite une semaine où chaque café sera renversé sur votre clavier.",
  "Bonne semaine à vous, que vos voisins percent des trous tous les soirs à 22h.",
  "Que cette semaine vous offre des trajets en transports dignes de l’enfer.",
  "Bonne semaine à vous, entre les factures surprises et les notifications de merde.",
  "Je vous souhaite une semaine pleine de décisions absurdes prises par des incompétents.",
  "Bonne semaine à vous, remplie de promesses non tenues et de déceptions garanties.",
  "Que cette semaine vous glisse entre les doigts comme vos derniers espoirs de repos.",
  "Bonne semaine à vous, ponctuée de bugs qu’on vous reprochera alors que c’est pas votre taf.",
  "Je vous souhaite des journées longues, chiantes, et des nuits encore plus pourries.",
  "Bonne semaine à vous, que chaque tâche soit plus relou que la précédente.",
  "Que cette semaine vous pourrisse comme un tupperware oublié.",
  "Bonne semaine à vous, bande de têtes de nœud corporate.",
  "Je vous souhaite une semaine de merde, avec des deadlines à la con et des managers qui comprennent rien.",
  "Bonne semaine à vous, les experts en branlage de réunions stériles.",
  "Que votre semaine soit aussi agréable qu'une gastro sur un ferry.",
  "Bonne semaine à vous, pleine de mails passifs-agressifs et de cc inutiles.",
  "Je vous souhaite une semaine où tout ce que vous planifiez tombe à l’eau.",
  "Bonne semaine à vous, et que tous vos chargeurs soient juste assez cassés pour vous énerver.",
  "Que cette semaine vous confronte à vos pires collègues dès 9h chaque matin.",
  "Bonne semaine à vous, avec juste assez de merde pour vous empêcher de démissionner... mais pas trop non plus.",
  "Je vous souhaite une semaine pleine de réunions qui auraient pu être un mail... mais en pire.",
];


module.exports = {
  name: 'forceweekannonce',
  category: 'moderation',
  defaultMemberPermissions: PermissionFlagsBits.Administrator,
  ownerOnly: false,
  usage: 'forceweekannonce',
  examples: 'forceweekannonce',
  description: 'Relance le message de la bonne semaine de merde',
  async runInteraction(client) {
    const channel = client.channels.cache.get(1337404938053222421)
    const phrase = semainesDeMerde[Math.floor(Math.random() * semainesDeMerde.length)];
    channel.send(phrase)
  }
};