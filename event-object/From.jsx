function handelFormSubmit(){
    console.log("form was submitted");
    event.preventDefault();
}
export default function Form(){
    return(<form onSubmit={handelFormSubmit}>
        <input placeholder="write something"/>
        <button>Submit</button>
    </form>
    );
}