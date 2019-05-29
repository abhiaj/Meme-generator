import React from "react"

class MemeGenerator extends React.Component
{
	constructor(){
		super()
		this.state={
			top: "",
			bottom: "",
			rand: "http://i.imgflip.com/1bij.jpg",
			data: []
		}

		this.handleChange=this.handleChange.bind(this)
	}

	componentDidMount(){
		//fetching data from an upi using http
		fetch("https://api.imgflip.com/get_memes")
		//converting to json
			.then(item=>item.json())
		//assignign state the data from api call
		// .data.memes is an array that needs to be assigned here
			.then(item=> {
				console.log(item.data.memes[0])
				this.setState(prevState=>{
					return{
						data: item.data.memes
					}
				})
			})
	}

	handleChange(event){
		const {name,value}=event.target
		this.setState( ()=>{
			return{
				[name]: value
			}
		})
	}

	render(){
		return(
			<div>
				<form >
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
					</br>
					<button> Submit</button>

				</form>
			</div>
		)
	}
}

export default MemeGenerator