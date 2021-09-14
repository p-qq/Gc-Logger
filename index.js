import selfcore from "selfcore";

const webho = ""
const chanID = ""
const token = ""

const client = new selfcore();
const gateway = new selfcore.Gateway(
  token
);

gateway.on("message", (m) => {
  if (m.channel_id === chanID) {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] } ? m.content : {attachments: [m.attachments[0]]};
    let author = m.author.username;
    let tag = m.author.discriminator;
    console.log(`${author}#${tag}: ${content}  | logged msg | sending to hook`)
    if (content === m.content){
      client.sendWebhook(
        webho,
        `${author}#${tag}: ${content}`
      );
    } else {
      client.sendWebhook(
        webho,
        content
      );
    }
  }
});
