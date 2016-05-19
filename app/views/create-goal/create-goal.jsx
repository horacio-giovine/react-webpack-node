import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { createGoal } from 'actions/goals'

class CreateGoal extends Component {
render () {
  return(
    <div class='body padding' style='padding-top: 20px'>
      <div class='row-input-list'>
        <label>Name of Financial Security Goal</label>
        <input class='w-input input-form' data-name='visionvalue' id='visionvalue' name='visionvalue' placeholder='Own home' required='required' type='text' />

         <div class='separator-fields'></div>
         <div class='separator-fields'></div>
         <div class='separator-fields'></div>
         <div class='separator-fields'></div>
      </div>

       <div class='row-input-list'>
        <label>How much will it take to achieve this goal?</label>
        <div style='display: inline-block;font-size: 12px;padding-right: 2px;'>$</div><input class='w-input input-form' data-name='achievevision' id='achievevision' name='achievevision' placeholder=' 250,000' required='required' style='width:40%;padding-bottom: 0px;' type='text' />

        <div class='separator-fields'></div>
        <div class='separator-fields'></div>
        <div class='separator-fields'></div>
      </div>

      <div class='row-input-list'>
        <div class='w-row'>
          <div class='w-col w-col-8 w-col-small-8 w-col-tiny-8 n-p-l'>
            <label>When will you start this goal?</label>
          </div>
          <div class='w-col w-col-3 w-col-small-3 w-col-tiny-3 n-p-l'>
          <div class='goal-action-button' style='width: 80px;'> Today </div>
          </div>

        </div>
        <div style='padding-top:7px;'> </div>
        <div style='color:rgb(189,189,189);font-size: 10px;'>OR SPECIFIC DATE </div>
        <img src='/BrightPlanMobile/resource/1461148297000/BrightPlanMobile/BrightPlanMobile/ico/date_picker.png' />

        <div class='separator-fields'></div>
        <div class='separator-fields'></div>
        <div class='separator-fields'></div>
      </div>

       <div class='row-input-list'>
        <label>When would you like to achieve this goal?</label>
        <img src='/BrightPlanMobile/resource/1461148297000/BrightPlanMobile/BrightPlanMobile/ico/date_picker.png' />

        <div class='separator-fields'></div>
        <div class='separator-fields'></div>
        <div class='separator-fields'></div>
      </div>

       <div class='row-input-list'>
        <label>How confident are you?</label>
        <a class='category-link' href='BrightPlan_Create_Goal_Success' style='background-color: rgb(190,190,190);'>Hopeful</a><a class='category-link' href='BrightPlan_Create_Goal_Success'>Confident</a><a class='category-link' href='BrightPlan_Create_Goal_Success' style='background-color: rgb(190,190,190);'>Guaranteed</a>
      </div>
      <br />
      <br />
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createGoal }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreateGoal)
