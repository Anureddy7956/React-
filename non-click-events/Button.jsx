function handelClick(){
    console.log("Hello!!");
}
function handelOver(){
    console.log("bye");
}
function handelDblClick(){
    console.log("you double clicked");
}
export default function Button(){
    return(
        <div>
            <button onClick={handelClick}>Anime</button>
            <p onMouseOver={handelOver}>Spy × Family (stylized as SPY×FAMILY and pronounced "spy family")[4][5][6] 
         is a Japanese web manga series written and illustrated by Tatsuya Endo.
         The story follows Agent Twilight, an enigmatic spy who has
          to "build a family" to execute a mission, not realizing that his adopted daughter is a telepath,
         and the woman he agrees to marry is a skilled assassin. 
           The series has been serialized biweekly on Shueisha's Shōnen Jump+ app and website since March 2019, 
         with its chapters collected in 17 tankōbon volumes as of April 2026. It is licensed in North America by Viz Media. </p>
         <button onDoubleClick={handelDblClick}>Doublr click Me</button>
        </div>
    );
}