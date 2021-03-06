'strict mode';
import Q from 'q';
import Mongoose from 'mongoose';
const urlDatabase = process.env.MONGODB;
export const Schema = Mongoose.Schema;

/////////////event handler for mongoose
const conn = Mongoose.connection.on('connected', function () {
  // console.log('Mongoose default connection open to twitter app');
});
Mongoose.connection.on('error',function (err) {
  // console.log('Mongoose default connection error: ' + err);
});
Mongoose.connection.on('disconnected', function () {
  // console.log('Mongoose default connection disconnected');
});

export const close = ()=>{
  Mongoose.connection.close(function () {
    //console.log('Mongoose default connection disconnected through app termination');
  });
}
export const disconnect = ()=>{
  Mongoose.disconnect((err)=>{
    return (!err);
  });
}

export const CollectionExists =(collectionName)=> {
  const collections = Mongoose.connection.collections;

  for(let key in collections){console.log(key); if(key===collectionName) return true;}
  return false;
};

export const connect = ()=> {
  const mongoOptions =
  {
      db: {safe: true},
      server: {
          socketOptions: {
              keepAlive: 1,
              connectTimeoutMS: 30000
          }
      }
  };
  if (Mongoose.connection.readyState === 0)
      return Mongoose
      .connect(urlDatabase || process.env.MONGODB, mongoOptions,
        (err)=>{
        return (!err);
      });
}
export const TwitterList = new Schema({
  account: {type: String, index: true},
  account_id: {type: String},

      "name": {type: String},
      "slug": {type: String},
      "uri": {type: String},
      "id_str": {type: String},
      "subscriber_count": {type: Number},
      "member_count": {type: Number},
      "mode": {type: String},
      "id": {type: Number},
      "full_name": {type: String},
      "description": {type: String},
      "user": {
        "profile_sidebar_border_color": {type: String},
        "profile_background_tile": {type: Boolean},
        "profile_sidebar_fill_color": {type: String},
        "name": {type: String},
        "created_at": {type: String},
        "location": {type: String},
        "profile_image_url": {type: String},
        "follow_request_sent": {type: Boolean},
        "profile_link_color": {type: String},
        "is_translator": {type: Boolean},
        "id_str": {type: String},
        "default_profile": {type: Boolean},
        "favourites_count": {type: Number},
        "contributors_enabled": {type: Boolean},
        "url": {type: String},
        "id": {type: Number},
        "profile_image_url_https": {type: String},
        "utc_offset": {type: Number},
        "profile_use_background_image": {type: Boolean},
        "listed_count": {type: Number},
        "lang": {type: String},
        "followers_count": {type: Number},
        "profile_text_color": {type: String},
        "protected": {type: Boolean},
        "profile_background_color": {type: String},
        "verified": {type: Boolean},
        "time_zone": {type: String},
        "profile_background_image_url_https": {type: String},
        "description": {type: String},
        "notifications": {type: Boolean},
        "geo_enabled": {type: Boolean},
        "statuses_count": {type: Number},
        "default_profile_image": {type: Boolean},
        "friends_count": {type: Number},
        "profile_background_image_url": {type: String},
        "following": {type: Boolean},
        "screen_name": {type: String},
        "show_all_inline_media": {type: Boolean}
      },
      "following": {type: String}
});
export const TwitterListModel = conn.model('TwiiterList', TwitterList);

export const TwitterToken = new Schema({
  access_token: {type: String, default: '', index:true},
  date: {type: Date, default: Date.now}
});
export const TwitterTokenModel = conn.model('TwitterToken', TwitterToken);
export const TwitterAccount = new Schema({
  name: {type: String},
  date: {type: Date, default: Date.now}
});



export const TwitterAccountModel = conn.model('TwitterAccount', TwitterAccount);
export const TwitterTweet = new Schema({
  account: {type: String, index: true},
  account_id: {type: String},
  access_token: {type: String, default: ''},
  created_at: {type: Date},
  id: {type: Number},
  id_str: {type: String},
  coordinates: {type: Object},
  favorited: {type: Boolean},
  truncated: {type: Boolean},
  entities: {
      urls: [
        {
          expanded_url: {type: String},
          url: {type: String},
          indices: {type: Array},
          display_url: {type: String}
        }
      ],
      hashtags: {type: Array},
      user_mentions: {type: Array}
    },
  in_reply_to_user_id_str: {type: String},
  contributors: {type: Array},
  text: {type: String},
  retweet_count: {type: Number},
  in_reply_to_status_id_str: {type: String},
  geo: {type: String},
  retweeted: {type: Boolean},
  possibly_sensitive: {type: Boolean},
  in_reply_to_user_id: {type: Number},
  place: {type: Object},
  user: {
    profile_sidebar_fill_color: {type: String},
    profile_sidebar_border_color: {type: String},
      profile_background_tile: {type: Boolean},
      name: {type: String},
      profile_image_url: {type: String},
      created_at: {type: Date},
      location: {type: String},
      follow_request_sent: {type: Boolean},
      profile_link_color: {type: String},
      is_translator: {type: Boolean},
      id_str: {type: String},
      entities: {
        url: {
          urls: [
            {
              expanded_url: {type: String},
              url: {type: String},
              indices: {type: Array}
            }
          ]
        },
        description: {
          "urls": {type: Array}
        }
      },
      default_profile: {type: Boolean},
      contributors_enabled: {type: Boolean},
      favourites_count: {type: Number},
      url: {type: String},
      profile_image_url_https: {type: String},
      utc_offset: {type: Number},
      id: {type: Number},
      profile_use_background_image: {type: Boolean},
      listed_count: {type: Number},
      profile_text_color: {type: String},
      lang: {type: String},
      followers_count: {type: Number},
      protected: {type: Boolean},
      notifications: {type: String},
      profile_background_image_url_https: {type: String},
      profile_background_color: {type: String},
      verified: {type: Boolean},
      geo_enabled: {type: Boolean},
      time_zone: {type: String},
      description: {type: String},
      default_profile_image: {type: Boolean},
      profile_background_image_url: {type: String},
      statuses_count: {type: Number},
      friends_count: {type: Number},
      following: {type: Array},
      show_all_inline_media: {type: Boolean},
      screen_name: {type: String},
    },
    in_reply_to_screen_name: {type: String},
    source: {type: String},
    in_reply_to_status_id: {type: Number}
});
export const TwitterTweetModel = conn.model('TwitterTweet', TwitterTweet);
