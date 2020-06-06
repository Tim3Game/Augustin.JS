import { Command, CommandOptions, KlasaMessage } from 'klasa';
import { ChannelType } from '@klasa/dapi-types';
import { ApplyOptions } from "@skyra/decorators";
import {Message} from "@klasa/core";

@ApplyOptions<CommandOptions>({
    name: 'iban',
    usage: '<iban:iban>',
    description: '',
})
export default class extends Command {

    async run(message: KlasaMessage, params:any[]) {
        if (message.channel.type === ChannelType.DM) {
            return message.channel.send(msg => msg.setContent(`Hey ${message.author} ! Here should be something informative, but there isn't, well, what now ?`));
        } else {
            throw message.language.get('INHIBITOR_SECURITY', this.name)
        }
    }

    async init() {

    }


};
