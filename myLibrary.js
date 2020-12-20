function isTouching(movingRect,fixedRect){
    if(movingRect.x- fixedRect.x<width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && movingRect.y-fixedRect.y < fixedRect.width/2+movingRect.width/2 && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2  )
    { return true;
     
  
    }
    else{
      return false;
  
    }
  }