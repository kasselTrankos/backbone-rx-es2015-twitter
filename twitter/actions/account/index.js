import {connect, disconnect, TwitterAccountMode, ExitsAccount,
  SaveNewAccount,  GetAllAccounts, CollectionExists
  } from './../../db';
import Q from 'q';
export const post = (req, params)=> {
  connect();
  const {name} = req.body;
  console.log(name, ' with is');
  return ExitsAccount(name)
    .then((exists)=>{
      if(exists) return exists;
      else return SaveNewAccount(name);
    })
    .then((doc)=>{
      return GetAllAccounts();
    })
    .then((docs)=>{
      disconnect();
      return docs;
    })
    .catch((err)=>{
      console.log('ERR in account post', err);
      disconnect();
    });

};
export const get = (req, params)=> {
  const conn = connect();
  return GetAllAccounts()
    .then((docs)=>{
      disconnect();
      return docs;
    })
    .catch((err)=>{
      console.log('ERR in account get', err);
      disconnect();
    });
};
