import { Client, GatewayIntentBits, Collection, Events } from 'discord.js';
import fs from 'fs';

import settings from './config/settings.js';
import './cron-fetch.js';

import { fetchDocsFromSitemap } from './fetchDocs.js';
import './deploy-commands.js';
import commandHandler from './handlers/commandHandler.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

let docs = '';
(async () => {
  await fetchDocsFromSitemap();
  try {
    docs = fs.readFileSync('./docs.txt', 'utf-8');
  } catch (err) {
    console.error('🚨 Failed to read docs.txt:', err.message);
    docs = 'Docs not loaded.';
  }
})();

// Load all commands
commandHandler(client);

client.once(Events.ClientReady, () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction, { docs, client, settings });
  } catch (error) {
    console.error(`❌ Error executing /${interaction.commandName}:`, error);
    await interaction.reply({
      content: '❌ There was an error while executing this command.',
      ephemeral: true,
    });
  }
});

client.login(settings.DISCORD_TOKEN);