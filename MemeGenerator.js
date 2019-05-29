import React from "react"

class MemeGenerator extends React.Component
{
	constructor(){
		super()
		this.state={
			top: "hi",
			bottom: "bi",
			rand: "http://i.imgflip.com/1bij.jpg",
			data: []
		}
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

	render(){
		return(
			<div>
				<h4>yoho</h4>
			</div>
		)
	}
}

export default MemeGenerator