import React from "react";

const IndexPage = (props) => {

	React.useEffect(() => {
		const token = localStorage.getItem("CC_TOKEN");
		if(!token) {
			props.history.push("/user/logincustomer");
		} 
		else {
			props.history.push("/user/allshops");
		}
		//eslint-disable-next-line
	}, [0]);
	return <div></div>;
}

export default IndexPage;