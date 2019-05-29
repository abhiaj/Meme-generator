import React from "react"

class Header extends React.Component{

	constructor(){
		super()
		this.state={}
	}

	render(){
		return(
			<header> 
				<img className="img"
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            	/>
            	<p>Bleh</p>
			</header>
			)
	}
}

export default Header