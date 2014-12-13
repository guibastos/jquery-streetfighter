var stateMachine = {
  	current: null,
  	states: [],
  	transitions: {},
      
  	setCurrent: function(state) {
            var _this = stateMachine;
            _this.checkState(state);
            _this.current = state;
   	}, 

      addTransition: function (firstState, secondState, change) {
  	    var  _this = stateMachine;
            _this.checkState(firstState);
        
            //Create a list of states that firstState can transition to, if it doesn't exist
            if (!_this.transitions[firstState.toString()])
                  _this.transitions[firstState] = [];
            
            //Add the secondState to the list of valid transitions
             _this.transitions[firstState].push([secondState, change]);
      },
      
      transitionTo: function (newState) {
              var _this = stateMachine,
                    madeTransition = false;

             _this.checkState(newState);

             _this.transitions[_this.current].forEach(function(currentState) {
                    if (newState === currentState[0]) {
                           _this.current = newState;
                           currentState[1]();
                          madeTransition = true;
                    }
             });

             return madeTransition;
      },   

      checkState: function (state) {
            var _this = stateMachine
            if (_this.states.indexOf(state) < 0)
                  throw state + " is not a state.";
      }
};

//Initialize the state machine
stateMachine.states = [ 'still', 'moving', 'hadouken', 'cool' ];
stateMachine.setCurrent('still');

stateMachine.addTransition('still', 'moving', function() {     
       //transition Logic
       console.log(stateMachine.current);
});
stateMachine.addTransition('still', 'hadouken', function() {     
       //transition Logic
       console.log(stateMachine.current);
});
stateMachine.addTransition('still', 'cool', function() {     
       //transition Logic
       console.log(stateMachine.current);
});

stateMachine.addTransition('moving', 'still', function() {     
       //transition Logic
       console.log(stateMachine.current);
});
stateMachine.addTransition('moving', 'hadouken', function() {     
       //transition Logic
       console.log(stateMachine.current);
});
stateMachine.addTransition('moving', 'cool', function() {     
       //transition Logic
       console.log(stateMachine.current);
});

//'hadouken' doesn't transition to 'cool'
stateMachine.addTransition('hadouken', 'still', function() {     
       //transition Logic
       console.log(stateMachine.current);
});
stateMachine.addTransition('hadouken', 'moving', function() {     
       //transition Logic
       console.log(stateMachine.current);
});

//'cool' doesn't transition to 'hadouken'
stateMachine.addTransition('cool', 'still', function() {     
       //transition Logic
       console.log(stateMachine.current);
});
stateMachine.addTransition('cool', 'moving', function() {     
       //transition Logic
       console.log(stateMachine.current);
});

//Ryu starts in 'still'
stateMachine.transitionTo('moving'); //returns true
stateMachine.transitionTo('hadouken'); //returns true
stateMachine.transitionTo('cool'); //returns false
stateMachine.transitionTo('moving'); //returns true
stateMachine.transitionTo('cool'); //returns true
stateMachine.transitionTo('hadouken'); //returns false