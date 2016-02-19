import Q from 'q';
import {TwitterTweetModel, TwitterAccountModel} from './../index';
export const findAllTweetsByAccount = (account, sort={created_at:-1})=>{
  let deferred = Q.defer();
  TwitterTweetModel.find({
    account:account
  }, 'text user.profile_image_url user.name user.url user.screen_name').sort(sort).exec((err, docs)=>{
    if(!err){
      deferred.resolve(docs);
    }else{
      console.log('ERROR en querys.findAllTweetsByAccount:',err, 'account', account);
      deferred.reject(err);
    }
  });
  return deferred.promise;
}
export const PushMongoTimelineRest = (tweets, account, account_id)=>{
  let i=0; const l = tweets.length;
  let deferred = Q.defer();
  const updateInsert = (tweet, callback)=>{
    tweet.account = account;
    tweet.account_id = account_id;
    TwitterTweetModel.update(
    {id: tweet.id},
    {
      $set: tweet
    },
    {upsert: true, new: true},
    (err, rowsAffected)=> {
      if(err) {
        console.log('ERR en querys.PushMongoTimelineRest: ',err);
        callback({status: false, error: err});
        return;
      }

      if(i<(tweets.length-1)) updateInsert(tweets[++i], callback);
      else callback({status: true});
    });
  };
  updateInsert(tweets[0], (response)=>{
    if(response.status) {
      deferred.resolve(tweets);
    }else {
      deferred.reject(response.error);
    }
  });
  return deferred.promise;
}
//will be asociated to previous function, ( power of functional, complex before is update/insert and now not)
export const ExistsTweet = (tweet)=>{

  let deferred = Q.defer();
  TwitterTweetModel.findOne({id: tweet.id}, '',(err, doc)=>{
    if(!err)  {
      if(doc===null) deferred.resolve(tweet);
      else deferred.resolve(false);
    }else{
      console.log('ERR en querys.ExistsTweet: ',err);
      deferred.reject(err);
    }
  });
  return deferred.promise;
}
export const InsertTweet = (tweet, account, account_id)=>{
  let deferred = Q.defer();

  tweet.account = account;
  tweet.account_id = account_id;
  var Tweet = new TwitterTweetModel(tweet);

  Tweet.save(
  (err, doc, numAffected)=> {
    if(!err){
      deferred.resolve(doc);
    }else{
      console.log('ERR en querys.InsertTweet: ',err);
      deferred.reject(err);
    }
  });
  return deferred.promise;
}

export const InsertOrUpdateTweet = (tweet, account, account_id)=>{
  let deferred = Q.defer();
  tweet.account = account;
  tweet.account_id = account_id;
  console.log(tweet.id_str, ' SAVE');
  TwitterTweetModel.update(
    {id_str: tweet.id_str},
    { $set: tweet },
    {upsert: true},
    (err, numAffected)=>{
      if(!err){
        deferred.resolve(tweet);
      }else{
        console.log(err);
        deferred.reject(err);
      }
    }
  );
  return deferred.promise;
}
