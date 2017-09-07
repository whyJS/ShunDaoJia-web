                      window.onload=function(){
                      	//商品
                      var oScore = document.getElementById("score");
                      var oLi=oScore.getElementsByTagName('li');     
                      var iScore =  0;  
                      for(var i=0;i<oLi.length;i++){  
                          oLi[i].index=i;  
                          oLi[i].onclick = function(){   
                              iScore = this.index+1;
                               fnPoint(iScore);       //鼠标点击事件，记录下索引，并返回索引值       
                          }       
                      }  
                      function fnPoint(arg){                  
                          iScore = arg? arg:iScore;        //接收一个参数，如果没传进参数就用iScore  
                          for(var i=0;i<oLi.length;i++){   //遍历oLi,对点击的和之前的都亮起来，之后的不亮  
                             oLi[i].className = i<iScore? 'current':'';    
                          }  
                      } 
                      //服务
                      var oScore2 = document.getElementById("score2");
                      var oLi2= oScore2.getElementsByTagName('li');     
                      var iScore2 =  0;  
                      for(var i=0;i<oLi2.length;i++){  
                          oLi2[i].index=i;  
                          oLi2[i].onclick = function(){   
                              iScore2 = this.index+1;
                               fnPoint2(iScore2);       //鼠标点击事件，记录下索引，并返回索引值       
                          }       
                      }  
                      function fnPoint2(arg){                  
                          iScore2 = arg? arg:iScore2;        //接收一个参数，如果没传进参数就用iScore  
                          for(var i=0;i<oLi.length;i++){   //遍历oLi,对点击的和之前的都亮起来，之后的不亮  
                             oLi2[i].className = i<iScore2? 'current':'';    
                          }  
                      } 
                     }
                     