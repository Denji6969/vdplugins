(function(t,c,i,d){"use strict";const{sendBotMessage:o}=i.findByProps("sendBotMessage");t.ApplicationCommandInputType=void 0,function(n){n[n.BUILT_IN=0]="BUILT_IN",n[n.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",n[n.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",n[n.BOT=3]="BOT",n[n.PLACEHOLDER=4]="PLACEHOLDER"}(t.ApplicationCommandInputType||(t.ApplicationCommandInputType={})),t.ApplicationCommandOptionType=void 0,function(n){n[n.SUB_COMMAND=1]="SUB_COMMAND",n[n.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",n[n.STRING=3]="STRING",n[n.INTEGER=4]="INTEGER",n[n.BOOLEAN=5]="BOOLEAN",n[n.USER=6]="USER",n[n.CHANNEL=7]="CHANNEL",n[n.ROLE=8]="ROLE",n[n.MENTIONABLE=9]="MENTIONABLE",n[n.NUMBER=10]="NUMBER",n[n.ATTACHMENT=11]="ATTACHMENT"}(t.ApplicationCommandOptionType||(t.ApplicationCommandOptionType={})),t.ApplicationCommandType=void 0,function(n){n[n.CHAT=1]="CHAT",n[n.USER=2]="USER",n[n.MESSAGE=3]="MESSAGE"}(t.ApplicationCommandType||(t.ApplicationCommandType={}));const s=c.registerCommand({name:"realgpt",displayName:"realgpt",description:"why",displayDescription:"why",options:[{name:"prompt",displayName:"prompt",description:"self explantory",displayDescription:"self explantory",type:3,required:!0}],type:1,inputType:1,applicationId:"-1",async execute(n,a){if(!d.plugin.manifest.authors.find(function(l){return l.id===i.findByProps("getCurrentUser").getCurrentUser()?.id}))return;const p=await fetch("https://free.churchless.tech/v1/chat/completions",{method:"POST",body:JSON.stringify({frequency_penalty:0,max_tokens:null,model:"gpt-3.5-turbo",presence_penalty:0,stream:!1,temperature:1,top_p:1,messages:[{content:n[0].value,role:"user"}]}),headers:{"content-type":"application/json"}});if(!p.ok)return o(a.channel.id,"Failed to fetch data");const e=await p.json();return o(a.channel.id,`> USER: ${n[0].value}
> model: \`${e.model}\`

${e.choices[0].message.content}`)}}),T=function(){return s()};return t.onUnload=T,t})({},vendetta.commands,vendetta.metro,vendetta);
