const image_own_home = require('images/aspiration_finsec_small.png')

export default function (state, action) {
  return {
    goalTitle: 'Own Home',
    goal: 250000,
    startDate: 'Jan 01 2015',
    fundingSource: 'Mutual Savings and Loan',
    progress: 200000,
    targetDate: 'Jan 01 2017',
    probability: 87,
    lastDeposit: 'April 01 2016',
    amount: 1500,
    image: image_own_home
  }
}
