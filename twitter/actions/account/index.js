import {connect, disconnect, TwitterAccountMode ,
  SaveNewAccount,  GetAllAccounts, CollectionExists
  } from './../../db';
import Q from 'q';
export const post = (req, params)=> {
  connect();
  const {name} = req.body;
  return SaveNewAccount(name)
    .then((doc)=>{
      if(doc===null) return SaveNewAccount(name);
      return doc;
    })
    .then((doc)=>{
      disconnect();
      return GetAll();
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
      return docss;
    })
    .catch((err)=>{
      console.log('ERR in account get', err);
      disconnect();
    });
};
