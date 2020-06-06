require('dotenv').config();
import { KlasaClient, KlasaClientOptions } from 'klasa';
import { ClientOptions } from './configs/KlasaConfig';

class AugustinJS extends KlasaClient {

	constructor(options: KlasaClientOptions) {
		super(options);

		// Add any properties to your Klasa Client
	}

	// Add any methods to your Klasa Client

}

const client = new AugustinJS(ClientOptions);
client.token = process.env.DISCORD_TOKEN != undefined ? process.env.DISCORD_TOKEN : '';

client.connect();
