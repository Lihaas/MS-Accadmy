

export const show = (index,max) =>{
    for(let i=0;i<=max;i++)
    {
      if(i===index)
      {
        if(document.getElementById(i).style.display==="block")
        {
          document.getElementById(i).style.display="none";
        }else{
          document.getElementById(i).style.display="block";
        }
      }else{
        document.getElementById(i).style.display="none";
      }
    }
   }