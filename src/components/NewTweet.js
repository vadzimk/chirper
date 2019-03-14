import React from 'react';

class NewTweet extends React.Component{
    state={
        text:"",
    };

    handleChange=(e)=>{
        const text = e.target.value;
        this.setState(()=>(
            {
            text,
        }
        ));
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        const {text}= this.state;
        //todo: add tweet to the store
        console.log('New tweet: ', text);
        this.setState(()=>(
            {
                text:""
            }
        ));
    };
    render(){
        const {text}=this.state;
        {/*todo: Redirect to the home view when submitted*/}
        const tweetLeft = 280-text.length;
        return (
            <div>
                <h3 className="center">Compose new tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                    />
                    {tweetLeft<=100 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className="btn"
                        type="submit"
                        disabled={text===''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default NewTweet;