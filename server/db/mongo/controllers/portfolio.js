import User from '../models/user';
//import passport from 'passport';
import axios from 'axios'
//import { salesforce as salesforceSecrets } from '../../../config/secrets'
import { getNewToken } from './users'

export function getPorfolios(req, res, next) {
  axios(
    {
      method: 'get',
      url: 'https://cs10.salesforce.com/services/apexrest/v1/portfolio',
      headers: {
        'Authorization': 'Bearer ' + req.user.accessToken
      }
    }
  )
  .then(function (response) {
    return res.status(200).json(response.data);
  },
  function (response) {
    console.log('ENTER ERROR FUNCTION: ', response.status);
    if(response.status === 401){
      getNewToken(req.user.refreshToken, req.user.profile.Id)
      .then(function(access_token){
        console.log('got new token!!');
        req.user.accessToken = access_token;
        getPorfolios(req, res, next);
      },
      function(err){
        console.log('got an error :(');
      })
    }
  })
}

export default {
  getPorfolios
};

