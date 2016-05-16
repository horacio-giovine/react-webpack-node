var React = require('react')
var TransfersBankInfo = require('./transfers-bank-info')
var TransfersBankList = require('./transfers-bank-list')

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        Transfers Section
        <TransfersBankInfo />
        <TransfersBankList />
      </div>
    )
  }
})
