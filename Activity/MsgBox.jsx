/* Show a Hello Message to the user in the diffrent colors.
Pass 2 values as props : userName & textColor      */

export default function MsgBox({userName,textColor}){
    return (
        <h1 style={{color:textColor}}>Hello,{userName}</h1>
    );

}