class Timer{
    constructor(durationInput, startBtn, pauseBtn, callbacks){
        //stro a reference 
        this.durationInput = durationInput; 
        this.startBtn = startBtn; 
        this.pauseBtn = pauseBtn;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
          }
      
        //bind event listeners arrow function bind automaticly this
        this.startBtn.addEventListener('click', ()=>{
            if(this.onStart){
                this.onStart(this.timeRemaining);
            }
            this.tick();
              this.intervalId = setInterval(this.tick, 20);
        })
        this.pauseBtn.addEventListener('click', ()=>{
            clearInterval(this.intervalId);
     })
    }

    

    tick = () =>{
        if (this.timeRemaining <= 0 ){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
       
    };
 
    get timeRemaining(){
       return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
     }
}