import { Command, CommandOptions, KlasaMessage } from 'klasa';
import { ApplyOptions } from "@skyra/decorators";
import moment from 'moment';

@ApplyOptions<CommandOptions>({
    name: 'profile',
    usage: '[user:user]',
    description: 'Display informations about your or the entered users informations',
})
export default class extends Command {

    async run(message: KlasaMessage, [user = message.author]) {
        console.log(user);
        console.log(user.premiumType);
        return message.channel.send(msg => msg.setEmbed(embed => {
            embed.setAuthor(`${user.username}'s Account Info`);
            if (user.avatar !== null) embed.setThumbnail(this.client.api.cdn.userAvatar(user.id, user.avatar.toString()));
            embed.addField(
                'Account Age:',
                `${getCreationTimestampString(user.id)}`
            );
            embed.addField(
                'Account Age:',
                `${getCreationTimestampString(user.id)}`
            );
            embed.addField(
                'Used Locale:',
                `${user.locale}`,
                true
            );
            embed.addField(
                'Verified Email ?',
                `${user.verified ? 'Yes' : 'No'}`,
                true
            );
            embed.addField(
                'Has Nitro ?',
                `${user.premiumType === undefined ? 'No' : user.premiumType === 1 ? 'Yes, Nitro Classic' : 'Yes, Nitro'}`,
                true
            );
            embed.addField(
                'Has MFA Enabled ?',
                `${user.mfaEnabled ? 'Yes' : 'No'}`,
                true
            );
            embed.setFooter(user.id);
            return embed;
        }));
    }

    async init() {

    }


};

function getCreationTimestamp(snowflake: string): Date {
    return new Date(parseInt(((+snowflake).toString(2).padStart(64, '0')).substring(0, 42), 2) + 1420070400000)
}

function getCreationTimestampString(snowflake: string): string {
    return moment(parseInt(((+snowflake).toString(2).padStart(64, '0')).substring(0, 42), 2) + 1420070400000).format('DD.MM.YYYY hh:mm:ss')
}
