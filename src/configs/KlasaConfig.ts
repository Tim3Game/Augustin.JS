import { KlasaClientOptions } from 'klasa';

export const ClientOptions: KlasaClientOptions = {
    /**
     * General Options
     */
    // Disables/Enables a process.on('unhandledRejection'...) handler
    production: false,
    // The default language that comes with klasa. More base languages can be found on Klasa-Pieces
    language: 'en-US',
    // The default configurable prefix for each guild
    commands: {
        prefix: '+',
        logging: true,
        editing: true,
        typing: true,
    },
    // If custom settings should be preserved when a guild removes your bot
    settings: {
        preserve: true,
    },
    consoleEvents: { verbose: true },
    ws: {
        additionalOptions: {
            presence: {
                status: 'online',
                activity: {
                    name: 'Working on my self',
                    type: 'LISTENING'
                }
            },
        }
    },

    //disabledCorePieces: [
    //    'commands'
    //],
    providers: {
        default: 'json'
    },
    rest: {
        offset: 0,
    }
};
