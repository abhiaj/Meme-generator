import React from "react"

class MemeGenerator extends React.Component
{
	constructor(){
		super()
		this.state={
			top: "",
			bottom: "",
			rand: "http://i.imgflip.com/1bij.jpg",
			dataimage: []
		}

		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}

	componentDidMount(){
		//fetching data from an upi using http
		fetch("https://api.imgflip.com/get_memes")
		//converting to json
			.then(item=>item.json())
		//assignign state the data from api call
		// .data.memes is an array that needs to be assigned here
			.then( item=> {
				//console.log(item.data.memes[0])
				const memes = item.data.memes
				this.setState(()=>{
					return{
						dataimage: memes
						//rand: item.data.memes[3].url
					}
				})
			})
	}

	handleChange(event){
		//const str=this.state.data[4].url
		
		const {name,value}=event.target
		this.setState( ()=>{
			return{
				[name]: value,
				//rand:str
			}
		})
	}

	handleSubmit(event){
		event.preventDefault()
		const min = 0
	    const max = this.state.dataimage.length
	    const rand = Math.floor(min + Math.random() * (max - min))
	    const str=this.state.dataimage[rand].url
	    this.setState( prevState=>{
	    	
	    	return{
	    		rand: str
	    	}
	    })
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text"
						value={this.state.top}
						name="top"
						placeHolder="top name"
						onChange={this.handleChange}
					/>
					<input 
						type="text"
						value={this.state.bottom}
						name="bottom"
						placeHolder="bottom name"
						onChange={this.handleChange}
					/>
					<br/>
					<button> Submit</button>

				</form>
				<div className="meme">
					<img src={this.state.rand} alt="" />
                    <h2 className="top">{this.state.top}</h2>
                    <h2 className="bottom">{this.state.bottom}</h2>
				</div>
			</div>
		)
	}
}

export default MemeGenerator