const TwitterText = (text)=>
  text.replace(/\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim, '<a href="$&" target="blank">$&</a>')
    .replace(/@([a-z\d_]+)/ig, ' <a href="http://www.twitter.com/$1" target="blank">@$1</a>')
    .replace(/(^|\s)#(\w+)/g, ' <a href="https://twitter.com/hashtag/$2?src=hash" target="blank">#$2</a>')
    .replace(/[\n\r]/g, '<br />')


export {TwitterText}
